import { SimpleGrid } from "@chakra-ui/react";
import { SpeciesCardGenerator } from "./SpeciesCardGenerator";

export const SpeciesContentView = () => {
	return (
		<SimpleGrid columns={3} p={5} spacing={3}>
			<SpeciesCardGenerator />
		</SimpleGrid>
	);
};
