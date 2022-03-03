import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favourite = (props) => {
  const [fav, setFav] = useState([]);
  //   const [RemoveFavourites, setRemoveFavourites] = useState([]);
  const navigate = useNavigate();

  const Deleteme = (movie) => {
    let id = movie.id;
    console.log(movie);
    console.log(movie, "fjjhffh");
    axios.delete("http://localhost:3000/movies/" + id).then((resp) => {
      getMovies();
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios.get("http://localhost:3000/movies").then((resp) => {
      setFav(resp?.data || []);
      console.log("upali", resp.data);
    });
  };

  return (
    <>
      <button className="back" onClick={() => navigate("/")}>
        <img className="image" src="left-arrow.png"></img> back button
      </button>

      <div className="image-container d-flex justify-content-start m-9 mt-7 mb -7">
        {fav.map((movie, index) => (
          <div
            key={index}
            className="image-container d-flex justify-content-center"
          >
            {/* {movie.movieImage ? ( */}
            <img className="img m-9" src={movie.Poster} alt="movie"></img>

            <div className="overlay d-flex align-items-center justify-content-center">
              <button className="remove" onClick={() => Deleteme(movie)}>
                removeFavouriteMovie
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
