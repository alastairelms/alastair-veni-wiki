import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SpeciesCardGenerator } from "./SpeciesCardGenerator";

export const SpeciesContentView = () => {
	return (
        <>
            <Heading pt={3} pl={5} mt={6} size="2xl">
                Star Wars/Species
            </Heading>
            <SimpleGrid columns={2} p={5} mt={5} spacing={10} className="movies-view">
                <SpeciesCardGenerator />
            </SimpleGrid>
        </>
	);
};
