import "../styles/MoviesView.css";
import { SimpleGrid } from "@chakra-ui/react";
import { CardGenerator } from "./CardGenerator";

export const MainContentView = () => {
	return (
		<SimpleGrid columns={3} p={5}>
			<CardGenerator />
		</SimpleGrid>
	);
};
