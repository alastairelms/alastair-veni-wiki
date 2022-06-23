import { gql, useQuery } from "@apollo/client";
import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GET_FILMS = gql`
	query GetFilms {
		allFilms {
			films {
				title
				director
				releaseDate
				id
			}
		}
	}
`;

export const dateToYear = (fullDate: string): string =>
	fullDate.substring(0, 4);

interface MovieCardProps {
	title: string;
	director: string;
	releaseDate: string;
	id: string;
}

export const MovieCardGenerator = () => {
	const { loading, error, data } = useQuery(GET_FILMS);

	console.log({ loading, error, data });

	if (loading) return <Spinner />;
	if (error) return <p>Error :</p>;

	return data.allFilms.films.map(
		({ title, director, releaseDate, id }: MovieCardProps) => (
			<GridItem
				p={5}
				w="100%"
				h="auto"
				border="1px white solid"
				id={id}
				key={id}
			>
				<Link to={`/movies/${id}`}>
					<Text>
						{title} - {dateToYear(releaseDate)}
					</Text>
					<Text>Directed by: {director}</Text>
				</Link>
			</GridItem>
		)
	);
};
