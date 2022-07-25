import { Heading, SimpleGrid } from "@chakra-ui/react";
import { PlanetCardGenerator } from "./PlanetCardGenerator";

export const PlanetsContentView = () => {
	return (
        <>
            <Heading pt={3} pl={5} mt={6} size="2xl">
                Star Wars/Planets
            </Heading>
            <SimpleGrid columns={2} p={5} mt={5} spacing={10} className="movies-view">
                <PlanetCardGenerator />
            </SimpleGrid>
        </>
	);
};
