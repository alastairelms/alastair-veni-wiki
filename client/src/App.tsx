import Button from '@mui/material/Button';
import MovieCardComponent from './components/MovieCardComponent';
import React, { useEffect, useState } from 'react';

function App() {

    const [films, setFilms] = useState({
        Title: "",
        Rated: "",
        Poster: ""
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
            <MovieCardComponent Title={films.Title} Rated={films.Rated} Poster={films.Poster}></MovieCardComponent>
            <Button variant='contained'>This is a button</Button>
        </div>
    );
}

export default App;
