import React, { useEffect, useState } from 'react';
// import AddToFavourites from './AddToFavourites';
import MovieList from './MovieList';
// import RemoveFavourites from './RemoveFavourites';
import SearchBox from './SearchBox';

const MovieListHeading = (props) => {
    const [movies, setMovies] = useState([]);
	// const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);

	};

    const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};


    
    const getDataFromChild = (getValueFromChild) =>{
        console.log(getValueFromChild)
        setMovies(getValueFromChild)
    }

	return (
		<div className='col' style={{color:"red"}}>
			<h1>{props.heading}</h1>
           <SearchBox  referToParent={getDataFromChild}/>
           
           <div className='row'> <MovieList movies={movies}
        //    favouriteComponent={AddToFavourites}
           		handleFavouritesClick={addFavouriteMovie}/>
           </div>
	
</div>
	);
};

export default MovieListHeading;