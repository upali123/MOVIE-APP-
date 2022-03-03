import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const SearchBox = (props) => {
    const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
	// const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
        // debugger
        // debugger
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	
	useEffect(() => {
		getMovieRequest(searchValue);
        
	}, [searchValue]);
   
    const passdataToParent =() =>{
     props.referToParent(movies)
    }

    const redirectFun = () =>{
        Navigate("/about")
    }
	return (
		<div className=''>
             {/* <img className="image mt-5" src="google.png">
        </img>  */}
        
			<input
				className='form-control'
				value={props.value}
                style={{color:"grey"}}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Search Your Favourite Movie.....'
                searchValue={searchValue}
                 setSearchValue={setSearchValue} 
                 
			></input>
             <button  className="Favourites"  onClick={()=>navigate("/about")}>Check Your Faviourite Lists</button>
            <button className='submit' onClick={passdataToParent}>Submit</button>
            
           
            
		</div>
	);
};

export default SearchBox;