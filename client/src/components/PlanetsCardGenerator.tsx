import { gql, useQuery } from "@apollo/client";
import { GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GET_PLANETS = gql`
	query GetPlanets {
		allPlanets {
			planets {
				name
				diameter
				population
				gravity
				id
			}
		}
	}
`;

interface PlanetCardProps {
	name: string;
	diameter: number;
	population: number;
	gravity: string;
	id: string;
}

export const PlanetsCardGenerator = () => {
	const { loading, error, data } = useQuery(GET_PLANETS);

	console.log({ loading, error, data });

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return data.allPlanets.planets.map(
		({ name, diameter, population, gravity, id }: PlanetCardProps) => (
			<GridItem
				p={5}
				w="100%"
				h="auto"
				border="1px white solid"
				id={id}
				key={id}
			>
				<Link to={`/planets/${id}`}>
					<Text>Name: {name}</Text>
					<Text>Diameter: {diameter}km</Text>
					<Text>Population: {population}</Text>
					<Text>Gravity: {gravity}</Text>
				</Link>
			</GridItem>
		)
	);
};
