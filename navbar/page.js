"use client";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex bg-red-200 p-4 justify-center">
      <div>
        <img className="h-[80px] w-[80px]" src="/logo.webp" alt="Logo" />
      </div>
      <div className="flex flex-col justify-items-center pl-6">
        <h1 className="font-bold text-lg">Choose from a Plethora of Movies on RunningPictures.</h1>
        <div className="flex mt-2">
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
      </div>
    </div>
  );
}
