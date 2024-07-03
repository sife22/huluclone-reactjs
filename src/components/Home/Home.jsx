import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import axios from "../../axios";

function Home({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="home">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
