import axios from "axios";
import React, { useState } from "react";
import Favourite from "./Favourite";

const MovieList = (props) => {
  const [favourites, setFavourites] = useState([]);
  // const FavouriteComponent = props.favouriteComponent;

  let isShow;
  const movieExits = async (movie) => {
    console.log("movie exist");
    const alreadyPresent = await axios.get("http://localhost:3000/movies");
    console.log(alreadyPresent);
    let flag = false;
    alreadyPresent.data.map((mov) => {
      console.log(mov.imdbID, movie.imdbID);
      if (mov.imdbID == movie.imdbID) {
        flag = true;
      }
    });
    return flag;
  };
  const Addme = async (movie) => {
    console.log("movie hun beta mai", movie);

    // const alreadyPresent = await axios.get("http://localhost:3000/movies");
    // console.log(alreadyPresent);
    // let flag = false;
    // alreadyPresent.data.map((mov) => {
    //   console.log(mov.imdbID, movie.imdbID);
    //   if (mov.imdbID == movie.imdbID) {
    //     flag = true;
    //   }
    // });
    let exist = await movieExits(movie);
    if (exist) {
      window.alert("Already in fav list");
    } else {
      setFavourites([movie, ...favourites]);
      axios.post("http://localhost:3000/movies", movie).then((resp) => {
        window.alert("succesfully added to Favourites");
      });
    }
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-9 mt-7 mb -7">
          <img className="img" src={movie.Poster} alt="movie"></img>

          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <button className="Fav" onClick={() => Addme(movie)}>
              {" "}
              AddToFavourites
            </button>
          </div>
        </div>
      ))}
      {isShow && <Favourite favourites={favourites} />}
    </>
  );
};

export default MovieList;
