import "../styles/MoviesView.css";
import { SimpleGrid } from "@chakra-ui/react";
import { CardGenerator } from "./CardGenerator";

export const MoviesContentView = () => {
	return (
		<SimpleGrid columns={3} p={5} spacing={3}>
			<CardGenerator />
		</SimpleGrid>
	);
};
