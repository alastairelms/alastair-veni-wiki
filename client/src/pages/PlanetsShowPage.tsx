import { gql, useQuery } from "@apollo/client";
import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { dateToYear, GET_FILMS } from "../components/MovieCardGenerator";
import { GET_PLANETS } from "../components/PlanetsCardGenerator";
import { Film } from "./MovieShowPage";

export interface Planet {
    id: string;
    name: string;
    diameter: number;
    terrains: Array<Terrain>;
    orbitalPeriod: number;
    population: number;
    gravity: string;
    filmConnection: Object;
}

interface Terrain {
    terrainType: string;
}

export const PlanetsShowPage = () => {
    const { id } = useParams();

    const QueryMultiple = () => {
        const films = useQuery(GET_FILMS);
        const planets = useQuery(GET_PLANETS);
        return [films, planets];
    }

    const [
        { loading: filmsLoading, data: filmsData },
        { loading: planetsLoading, data: planetsData }
    ] = QueryMultiple()

    if (filmsLoading || planetsLoading) return <Spinner />;

    const planet = planetsData.allPlanets.planets.find((planet: Planet) => planet.id === id)
    const filmList = filmsData.allFilms.films
    const filmIDs = filmList.map((film: Film) => film.id)

    const filmsToShow = planet.filmConnection.films.map((film: Film) => {
        if (filmIDs.includes(film.id)) {
            return filmList.find((filmData: Film) => filmData.id === film.id)
        }
    })

    return (

        <>
            <p>Planet Show Page - {planet.name}</p>
            <br />
            <p>Population - {planet.population}</p>
            <br />
            <p>Diameter - {planet.diameter}</p>
            {filmsToShow.map(
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
            )
            }
        </>

    )
};
