"use client";
import { useState } from "react";

export default function Navbar({onGenreSelect,onSearch}) {  
  const [genre,setGenre]=useState("")  
  const [query, setQuery] = useState("");
  const genres = ["Drama", "Action", "Romance", "Thriller", "Comedy", "Horror"];

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };


  const handleGenreSelect = () => {
    if(genre.trim()){
    onGenreSelect(genre);
    }
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

        <div className="mt-2 md:mt-0 md:ml-6">
          <select
            className="border p-2 rounded bg-gray-200 cursor-pointer"
            value={genre}
            onChange={(e) => {
                setGenre(e.target.value);
                onGenreSelect(e.target.value); 
              }}
          >
            <option value="">Select Genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <button
            onClick={(handleGenreSelect)}
            className="ml-2 bg-red-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
          >
            Get Movies
          </button>
        </div>
      </div>
    </div>
  );
}
