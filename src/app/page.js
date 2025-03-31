"use client";
import { useState } from "react";
import { fetchMovie,fetchMoviesByGenre } from "./apis/page";
import Navbar from "../../navbar/page";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMovieSearch = async (query) => {
    setLoading(true);
    const movieData = await fetchMovie(query);
    setMovies(movieData.Response === "True" ? [movieData] : []);
    setLoading(false);
  };

  const handleGenreSelect = async (genre) => {  
    if (!genre) return;
    setLoading(true);
    const moviesByGenre = await fetchMoviesByGenre(genre);
    setMovies(moviesByGenre);
    setLoading(false);
  };

  return (
    <div>
      <Navbar onGenreSelect={handleGenreSelect} onSearch={handleMovieSearch}/>  
      
      {loading ? (
        <p className="mt-4 text-center">Loading movies...</p>
      ) : (
        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.length === 0 ? (
            <p className="text-center">No movies found.</p>
          ) : (
            movies.map((movie) => (
              <div key={movie.imdbID} className="border p-2 rounded shadow">
                <h3 className="text-lg font-bold">{movie.Title} ({movie.Year})</h3>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
                <p className="text-sm"><strong>Genre:</strong> {movie.Genre}</p>
                <p className="text-sm"><strong>IMDB:</strong> {movie.imdbRating}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
