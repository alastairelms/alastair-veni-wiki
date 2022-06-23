import { gql, useQuery } from "@apollo/client";
import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GET_SPECIES = gql`
	query GetSpecies {
		allSpecies {
			species {
				name
				language
				averageLifespan
				classification
				id
			}
		}
	}
`;

interface SpeciesCardProps {
	name: string;
	language: number;
	averageLifespan: number;
	classification: string;
	id: string;
}

export const SpeciesCardGenerator = () => {
	const { loading, error, data } = useQuery(GET_SPECIES);

	console.log({ loading, error, data });

	if (loading) return <Spinner />;
	if (error) return <p>Error :</p>;

	return data.allSpecies.species.map(
		({
			name,
			language,
			averageLifespan,
			classification,
			id,
		}: SpeciesCardProps) => (
			<GridItem
				p={5}
				w="100%"
				h="auto"
				border="1px white solid"
				id={id}
				key={id}
			>
				<Link to={`/species/${id}`}>
					<Text>Name: {name}</Text>
					<Text>Language: {language}</Text>
					<Text>Average Lifespan: {averageLifespan}</Text>
					<Text>Classification: {classification}</Text>
				</Link>
			</GridItem>
		)
	);
};
