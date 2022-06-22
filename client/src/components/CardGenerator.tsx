import "../styles/MovieCard.css"
import { gql, useQuery } from "@apollo/client";
import { GridItem } from "@chakra-ui/react";

export const STAR_WARS_FILMS = gql`
    query StarWarsFilms {
        allFilms {
            films {
                title
                director
                releaseDate
            }
        }
    }
`

export const dateToYear = (fullDate: string): string => fullDate.substring(0, 4)

interface MovieCardProps {
    title: string,
    director: string,
    releaseDate: string,
}

export const CardGenerator = () => {
    const { loading, error, data } = useQuery(STAR_WARS_FILMS);

    console.log({ loading, error, data })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.allFilms.films.map(({ title, director, releaseDate }: MovieCardProps) => (
        <GridItem p={5} w='100%' h='auto' border='1px white solid'>
            <p>{title} - <span>{dateToYear(releaseDate)}</span></p>
            <p>Directed by: {director}</p>            
        </GridItem>

    ));
}

