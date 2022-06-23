import { SimpleGrid } from "@chakra-ui/react";
import { PlanetsCardGenerator } from "./PlanetsCardGenerator";

export const PlanetsContentView = () => {
	return (
		<SimpleGrid columns={3} p={5} spacing={3}>
			<PlanetsCardGenerator />
		</SimpleGrid>
	);
};
