import { FC } from "react";
import "../styles/MovieCard.css"

interface Film {
    Title: string,
    Rated: string,
    Poster: string,
    Year: string
}

const MovieCard: FC<Film> = ({ Title, Rated, Poster, Year }) => {
    return (
        <div className="movie-card">
            <div className="movie-desc">
                <p>{Title} - <span>{Year}</span></p>
                <p>Rated: {Rated}</p>
            </div>
            <img className="movie-image" src={Poster} alt={Title} />
        </div>
    )
}

export default MovieCard;
