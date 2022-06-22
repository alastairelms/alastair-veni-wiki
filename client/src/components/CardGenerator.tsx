import "../styles/MovieCard.css"
import { gql, useQuery } from "@apollo/client";
import { GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const STAR_WARS_FILMS = gql`
    query StarWarsFilms {
        allFilms {
            films {
                title
                director
                releaseDate
                id
            }
        }
    }
`

export const dateToYear = (fullDate: string): string => fullDate.substring(0, 4)

interface MovieCardProps {
    title: string,
    director: string,
    releaseDate: string,
    id: string
}

export const CardGenerator = () => {
    const { loading, error, data } = useQuery(STAR_WARS_FILMS);

    console.log({ loading, error, data })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.allFilms.films.map(({ title, director, releaseDate, id }: MovieCardProps) => (
        <GridItem p={5} w='100%' h='auto' border='1px white solid' id={id} key={id}>
            <Link to={`/movies/${id}`}>
                <Text>{title} - <span>{dateToYear(releaseDate)}</span></Text>
                <Text>Directed by: {director}</Text>
            </Link>
        </GridItem>

    ));
}

