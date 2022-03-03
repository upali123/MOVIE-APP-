import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
import Favourite from './components/Favourite';

const App = () => {
	

	return (
     
          
        <Router>
            <Routes>
                <Route path='/' element={<MovieListHeading/>}/>
                <Route path='/about' element={<Favourite/>}/>
                <Route path='/upali' element={<MovieList/>}/>
        </Routes>  </Router>
	);
};

export default App;