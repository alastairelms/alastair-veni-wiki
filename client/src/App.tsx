import Navbar from './components/Navbar';
import Searchbar from './components/SearchBar';
import MoviesView from './components/MoviesView';
import React, { useState } from 'react';

import "./App.css"

function App() {

    const [films, setFilms] = useState({
        Title: "",
        Rated: "",
        Poster: "",
        Year: ""
    });

    return (
        <div className="App">
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <MoviesView></MoviesView>
        </div>
    );
}

export default App;
