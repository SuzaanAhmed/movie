"use client";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const genres = ["Drama", "Action", "Romance", "Thriller", "Comedy", "Horror"];

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleGenreSearch = (genre) => {
    onSearch(genre);
  };

  return (
    <div className="flex bg-red-200 p-4 justify-center items-center flex-col md:flex-row">
      <div className="flex items-center">
        <img className="h-[80px] w-[80px]" src="/logo.webp" alt="Logo" />
      </div>

      <div className="flex flex-col md:flex-row items-center pl-6">
        <h1 className="font-bold text-lg mb-2 md:mb-0">
          Choose from a Plethora of Movies on RunningPictures.
        </h1>

        {/* Search Bar */}
        <div className="flex mt-2 md:ml-6">
          <input
            type="text"
            className="border p-2 rounded bg-gray-200"
            placeholder="Search Movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {/* Genre Dropdown */}
        <div className="mt-2 md:mt-0 md:ml-6">
          <select
            className="border p-2 rounded bg-gray-200 cursor-pointer"
            onChange={(e) => handleGenreSearch(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
