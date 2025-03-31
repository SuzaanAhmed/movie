"use client";
import { useState } from "react";
import { fetchMoviesByGenre } from "./apis/page";
import Navbar from "../../navbar/page";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const moviesByGenre = await fetchMoviesByGenre(query, query);
    setMovies(moviesByGenre);
    setLoading(false);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {loading ? (
        <p className="mt-4 text-center">Loading movies...</p>
      ) : (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
