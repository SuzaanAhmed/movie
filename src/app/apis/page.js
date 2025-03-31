const API_KEY = "d8c711ea";
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMovie(title) {
  const response = await fetch(`${BASE_URL}?t=${title}&type=movie&apikey=${API_KEY}`);
  return response.json();
}

export async function fetchRandomMovies() {
  const keywords = ["good", "bad", "love", "war", "dark", "light", "happy", "sad", "fast", "slow"];
  const randomSearchTerm = keywords[Math.floor(Math.random() * keywords.length)]; 
  const pageNumber = Math.floor(Math.random() * 2) + 1; 

  const response = await fetch(
    `${BASE_URL}?s=${randomSearchTerm}&type=movie&page=${pageNumber}&apikey=${API_KEY}`
  );
  
  const data = await response.json();
  
  return data.Search 
}



export async function fetchMoviesByGenre(genre, page = 3) { 
  
    const response = await fetch(
      `${BASE_URL}?s=${genre}&type=movie&page=${page}&apikey=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.Response === "True") {
      return data.Search;
    }
}