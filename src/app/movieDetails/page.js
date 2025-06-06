"use client"
import { fetchMovie } from "../apis/page";
import { useState } from "react";
import React from "react";
import Navbar from "../../../navbar/page";
import { handleMovieSearchFactory,randomiseSearchFactory } from "../page";

export default function MovieDetails(){
  //const title=document.getElementById("title")

  const [movies, setMovies] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const handleMovieSearch=handleMovieSearchFactory(setMovies,setLoading)
  const randomiseSearch=randomiseSearchFactory(setMovies,setLoading)
    
    return(
        <div>
            <Navbar onSearch={handleMovieSearch} onRandomise={randomiseSearch}/>  
            <h1>MovieDetails</h1>
            <p>{JSON.stringify(movies)}</p>
        </div>
    );
}