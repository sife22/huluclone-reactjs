import React, { useState } from "react";
import "./Navbar.css";
import requests from "../../api";

function Navbar({ setSelectedOption }) {
  const [movieName, setMovieName] = useState("");

  const findMovie = (e) => {
    e.preventDefault();
    setSelectedOption(requests.fetchMovieName + movieName);
    setMovieName("");
  };
  return (
    <div className="navbar">
      <div className="navbar_top">
        <img
          className="hulu_logo"
          src="https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
          alt=""
        />
        <form action="">
          <input
            className="search_input"
            type="text"
            placeholder="Search your movie .."
            onChange={(e) => setMovieName(e.target.value)}
            value={movieName}
          />
          <button className="search_button" onClick={findMovie}>
            Search
          </button>
        </form>
      </div>
      <div className="navbar_bottom">
        <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
          Trending
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchPopular)}>
          Popular
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
          Action
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchComedyMovie)}>
          Comedy
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchWesternMovies)}>
          Western
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchDocumentaryMovies)}>
          Documentary
        </h2>
        <h2 onClick={() => setSelectedOption(requests.fetchDramaMovies)}>
          Drama
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
