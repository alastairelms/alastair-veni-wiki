import React, { useEffect, useState } from 'react';
// import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import Searchbar from './components/SearchBar';
import "./App.css"
import MoviesView from './components/MoviesView';

function App() {

    const [films, setFilms] = useState({
        Title: "",
        Rated: "",
        Poster: "",
        Year: ""
    });

    const getFilms = async () => {
        try {
            const result = await fetch("https://www.omdbapi.com/?apikey=8e56ab22&t=batman")
            const resultAsJson = result.json();
            return resultAsJson;
        }
        catch (error) {
            console.log("getFilms error:", error)
        }
    }

    useEffect(() => {
        getFilms().then((data) => {
            setFilms(data)
        })
    }, [])

    console.log(films)

    return (
        <div className="App">
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <MoviesView films={films}></MoviesView>
        </div>
    );
}

export default App;
