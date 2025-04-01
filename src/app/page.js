"use client";
import { useState } from "react";
import { fetchMovie,fetchMovies,fetchRandomMovies } from "./apis/page";
import Navbar from "../../navbar/page";

export function handleMovieSearchFactory(setMovies, setLoading) {
  return async (query) => {
    if (!query) return;
    setLoading(true);
    const movieData = await fetchMovies(query);
    setMovies(movieData);
    setLoading(false);
  };
}

export function randomiseSearchFactory(setMovies, setLoading) {
  return async () => {
    setLoading(true);
    const rando = await fetchRandomMovies();
    setMovies(rando);
    setLoading(false);
  };
}

export default function Home() {
  const [movies, setMovies] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const handleMovieSearch=handleMovieSearchFactory(setMovies,setLoading)
  const randomiseSearch=randomiseSearchFactory(setMovies,setLoading)

  return (
    <div>
      
      <Navbar onSearch={handleMovieSearch} onRandomise={randomiseSearch}/>  
      
      {loading ? (
        <p className="mt-4 text-center">Loading movies...</p>
      ) : (
        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.length === 0 ? (
            <p className="text-center">No movies found.</p>
          ) : (
            movies.map((movie) => (
              <a href="/movieDetails" key={movie.imdbID} className="border p-2 rounded shadow">
                <h3 id="title" className="text-lg font-bold">{movie.Title} ({movie.Year})</h3>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
                <p className="text-sm"><strong>Genre:</strong> {movie.Genre}</p>
                <p className="text-sm"><strong>IMDB:</strong> {movie.imdbRating}</p>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
