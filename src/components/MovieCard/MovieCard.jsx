import React from "react";
import "./MovieCard.css";
import TextTruncate from "react-text-truncate";

function MovieCard({ movie }) {
  const base_url_img = "https://image.tmdb.org/t/p/original/";
  const openImage = () => {
    const image = document.getElementById("img");
    const source = image.src;
    window.open(source);
  };
  return (
    <div className="movie_card">
      <img
        src={`${base_url_img}${movie.poster_path || movie.backdrop_path}`}
        alt=""
        id="img"
        onClick={openImage}
      />
      <TextTruncate
        line={1}
        element="p"
        className="movie_overview"
        truncateText="..."
        text={movie.overview}
      />
      <TextTruncate
        line={1}
        element="h2"
        className="movie_title"
        truncateText="..."
        text={movie.title}
      />
      <div className="div_date_vote">
        <p className="date_vote">{movie.release_date}</p>
        <p className="date_vote">{movie.vote_average} / 10</p>
      </div>
    </div>
  );
}

export default MovieCard;
