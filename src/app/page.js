"use client"
import { useState } from "react";
import { fetchMovie, fetchBooks } from "../lib/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);

  const search = async () => {
    if (!query) return;
    const movieData = await fetchMovie(query);
    const bookData = await fetchBooks(query);
    setMovies(movieData.Response === "True" ? [movieData] : []);
    setBooks(bookData.docs || []);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Search Movies or Books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={search} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border p-2">
            <h3>{movie.Title} ({movie.Year})</h3>
            <img src={movie.Poster} alt={movie.Title} className="w-full" />
          </div>
        ))}
        {books.map((book, index) => (
          <div key={index} className="border p-2">
            <h3>{book.title} ({book.first_publish_year})</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
