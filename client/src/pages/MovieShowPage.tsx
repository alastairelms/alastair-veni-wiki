import { gql } from "@apollo/client";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const GET_FILMS = gql`
	query GetFilms {
		allFilms {
			films {
				created
				director
				edited
				episodeID
				id
				openingCrawl
				releaseDate
				title
				producers
			}
		}
	}
`;

interface Film {
	created: string;
	director: string;
	edited: string;
	episodeID: string;
	id: string;
	openingCrawl: string;
	releaseDate: string;
	title: string;
	producers: string;
}

export const MovieShowPage = () => {
	const { id } = useParams();

	return (
		<Grid
			templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
			gridTemplateRows={"auto 1fr auto"}
			gridTemplateColumns={"auto 1fr"}
			h="100vh"
		>
			<GridItem borderBottom="1px solid white" area={"header"}>
				<Heading p={5}>Star Wars Wiki</Heading>
			</GridItem>
			<GridItem borderRight="1px solid white" area={"nav"}>
				<Navbar />
			</GridItem>
			<GridItem area={"main"}>
				<Text>Movie Show Page</Text>
			</GridItem>
			<GridItem borderTop="1px solid white" area={"footer"}>
				<Footer />
			</GridItem>
		</Grid>
	);
};