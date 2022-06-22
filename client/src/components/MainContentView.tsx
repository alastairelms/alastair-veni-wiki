import "../styles/MoviesView.css";
import { Heading, VStack } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";

const MainContentView = () => {
	return (
		<>
			<VStack alignItems="left" pt={3}>
				<Heading>Star Wars Wiki</Heading>
				<div className="movies-container">
					<MovieCard />
				</div>
			</VStack>
		</>
	);
};

export default MainContentView;
