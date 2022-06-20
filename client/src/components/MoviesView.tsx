import "../styles/MoviesView.css"
import MovieCard from "./MovieCard";

const MoviesView = ({ films }: any) => {
    return (
        <div className="movies-container">
            <MovieCard Title={films.Title} Rated={films.Rated} Poster={films.Poster} Year={films.Year}></MovieCard>
        </div>
    )
}

export default MoviesView;
