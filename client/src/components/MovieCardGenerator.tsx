import { gql, useQuery } from "@apollo/client";
import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Film } from "../pages/MovieShowPage";

export const GET_FILMS = gql`
    query GetFilms {
        allFilms {
            films {
                title
                director
                releaseDate
                id
                created
                edited
                episodeID
                openingCrawl
            }
        }
    }
`;

export const dateToYear = (fullDate: string): string =>
	fullDate.substring(0, 4);

export const MovieCardGenerator = () => {
	const { loading, error, data } = useQuery(GET_FILMS);

	if (loading) return <Spinner />;
	if (error) return <p>Error :</p>;

	return data.allFilms.films.map(
		({ title, director, releaseDate, id }: Film) => (
			<Link to={`/movies/${id}`}>
				<GridItem
					p={5}
					w="100%"
					h="auto"
					border="1px black solid"
					rounded="lg"
					id={id}
					key={id}
				>
					<Text>{title}</Text>
					<Text>
						Directed by: {director} - {dateToYear(releaseDate)}
					</Text>
				</GridItem>
			</Link>
		)
	);
};
