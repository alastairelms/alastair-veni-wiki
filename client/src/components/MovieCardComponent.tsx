import { FC } from "react";

interface Film {
    Title: string,
    Rated: string,
    Poster: string,
}

const MovieCardComponent: FC<Film> = ({Title, Rated, Poster}) => {    
    return (
        <div className="movie-card">
            <p>Title: {Title}</p>
            <p>Rating: {Rated}</p>
            <img src={Poster} alt="" />
        </div>
    )
}

export default MovieCardComponent;
