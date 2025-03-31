const API_KEY = "d8c711ea"; // Replace with your actual API key
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMoviesByGenre(searchTerm, genre) {
  let allMovies = [];
  
  // Fetch multiple pages (OMDB allows 10 movies per page)
  for (let page = 1; page <= 3; page++) {
    const url = `${BASE_URL}?s=${searchTerm}&type=movie&page=${page}&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    
    if (data.Response !== "True") break; // Stop if no more results

    const filteredMovies = await Promise.all(
      data.Search.map(async (movie) => {
        const details = await fetchMovieById(movie.imdbID);
        return details.Genre.includes(genre) ? details : null;
      })
    );

    allMovies = [...allMovies, ...filteredMovies.filter(Boolean)];
  }

  return allMovies;
}

export async function fetchMovieById(imdbID) {
  const url = `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
}

export const fetchMovie = async (title) => {
  const res = await fetch(`${BASE_URL}?t=${title}&apikey=${API_KEY}`);
  return res.json();
};