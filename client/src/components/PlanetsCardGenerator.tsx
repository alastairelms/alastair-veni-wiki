import { gql, useQuery } from "@apollo/client";
import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Planet } from "../pages/PlanetsShowPage";

export const GET_PLANETS = gql`
    query Planets {
        allPlanets {
            planets {
                id
                name
                diameter
                terrains
                orbitalPeriod
                population
                gravity
                filmConnection {
                    films {
                        id
                    }
                }
            }
        }
    }
`;

export const PlanetsCardGenerator = () => {
	const { loading, error, data } = useQuery(GET_PLANETS);

	if (loading) return <Spinner />;
	if (error) return <p>Error :</p>;

	return data.allPlanets.planets.map(
		({ name, diameter, population, gravity, id }: Planet) => (
			<GridItem
				p={5}
				w="100%"
				h="auto"
				border="1px black solid"
				rounded="lg"
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
