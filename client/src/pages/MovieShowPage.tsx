import { gql, useQuery } from "@apollo/client";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
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

    return (
        <>
            <Heading pt={3} pl={5} mt={6} size="2xl">
                Star Wars/Movies/{movie.title}
            </Heading>
            <SimpleGrid columns={1} mr={5} mt={7} className="home-grid">
                <Heading pt={3} pl={5} size="lg">
                    Opening Text Crawl
                </Heading>
                <Text pt={3} pl={5} mr={5} letterSpacing={1}>
                    {movie.openingCrawl}
                </Text>
                <Heading pt={3} pl={5} size="lg">
                    Directed by:
                </Heading>
                <Text pt={3} pl={5} mr={5} letterSpacing={1}>
                    {movie.director}
                </Text>
            </SimpleGrid>
        </>
    )
        ;
};
