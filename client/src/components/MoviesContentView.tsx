import { Heading, SimpleGrid } from "@chakra-ui/react";
import { MovieCardGenerator } from "./MovieCardGenerator";
import "../styles/MoviesContentView.css"

export const MoviesContentView = () => {
    return (
        <>
            <Heading pt={3} pl={5} mt={6} size="2xl">
                Star Wars/Movies
            </Heading>
            <SimpleGrid columns={2} p={5} mt={5} spacing={10} className="movies-view">
                <MovieCardGenerator />
            </SimpleGrid>
        </>
    );
};
