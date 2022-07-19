import { gql, useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GET_FILMS = gql`
	query GetFilms {
		allFilms {
			films {
				created
				director
				edited
				episodeID
				id
				openingCrawl
				releaseDate
				title
				producers
			}
		}
	}
`;
interface Film {
    created: string;
    director: string;
    edited: string;
    episodeID: string;
    id: string;
    openingCrawl: string;
    releaseDate: string;
    title: string;
    producers: string;
}

export const MovieShowPage = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_FILMS);

    if (loading) return <Spinner />;
    if (error) return <p>Error :</p>;

    const movie = data.allFilms.films.find((movie: Film) => movie.id === id)

    return <>
        <p>Movie Show Page - {movie.title}</p>
        <br />
        <p>Opening Crawl - {movie.openingCrawl}</p>
        <br />
        <p>Directed by - {movie.director}</p>
    </>
        ;
};
