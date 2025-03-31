const API_KEY = "d8c711ea";
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMovie(title) {
  const response = await fetch(`${BASE_URL}?t=${title}&apikey=${API_KEY}`);
  return response.json();
}

export async function fetchMoviesByGenre(genre, page = 1) { 
    const response = await fetch(
      `${BASE_URL}?s=${encodeURIComponent(genre)}&type=movie&page=${page}&apikey=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.Response === "True") {
      return data.Search;
    }
}