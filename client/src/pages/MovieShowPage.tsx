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

	return <p>Movie Show Page - {id}</p>;
};
