import "../styles/MovieCard.css"
import { gql, useQuery } from "@apollo/client";

const STAR_WARS_FILMS = gql`
    query StarWarsFilms {
        allFilms {
            films {
                title
                director
                releaseDate
            }
        }
    }
`

const dateToYear = (fullDate: string): string => fullDate.substring(0, 4)

interface MovieCardProps {
    title: string,
    director: string,
    releaseDate: string,
}

const MovieCard = () => {
    const { loading, error, data } = useQuery(STAR_WARS_FILMS);

    console.log({ loading, error, data })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.allFilms.films.map(({ title, director, releaseDate }: MovieCardProps) => (
        <div className="movie-card" key={title}>
            <div className="movie-desc">
                <p>{title} - <span>{dateToYear(releaseDate)}</span></p>
                <p>Directed by: {director}</p>
            </div>
        </div>
    ));
}

export { MovieCard, dateToYear, STAR_WARS_FILMS }
