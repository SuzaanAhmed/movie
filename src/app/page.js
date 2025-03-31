"use client";
import { useState } from "react";
import Navbar from "../../navbar/page";
import { fetchMovie } from "./apis/page";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const movieData = await fetchMovie(query);
    setMovies(movieData.Response === "True" ? [movieData] : []);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="mt-4 grid grid-cols-2 gap-4 p-4">
        {movies.length === 0 ? (
          <p>No results found. Try searching for a movie.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="border p-2">
              <h3>{movie.Title} ({movie.Year})</h3>
              <img src={movie.Poster} alt={movie.Title} className="w-full" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
