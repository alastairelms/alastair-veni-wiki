import { SimpleGrid } from "@chakra-ui/react";
import { MovieCardGenerator } from "./MovieCardGenerator";

export const MoviesContentView = () => {
	return (
		<SimpleGrid columns={3} p={5} spacing={3}>
			<MovieCardGenerator />
		</SimpleGrid>
	);
};
