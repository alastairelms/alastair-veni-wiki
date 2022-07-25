import { gql, useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GET_FILMS } from "../components/MovieCardGenerator";

export interface Film {
	title: string;
	director: string;
	releaseDate: string;
	id: string;
    created: string;
    edited: string;
    episodeID: number;
    openingCrawl: string;
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
