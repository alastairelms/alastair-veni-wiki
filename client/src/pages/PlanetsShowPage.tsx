import { gql, useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GET_FILMS } from "../components/MovieCardGenerator";
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

    if ( filmsLoading || planetsLoading ) return <Spinner />;

    const planet = planetsData.allPlanets.planets.find((planet: Planet) => planet.id === id)
    console.log(planet)
    console.log(planet.filmConnection.films)

    const filmList = filmsData.allFilms.films
    console.log(filmList)

    const filmIDs = filmList.map((film: Film) => film.id)

    const filmsToShow = planet.filmConnection.films.map((film: Film) => {
        if (filmIDs.includes(film.id)) {
            return filmList.find((filmData: Film) => filmData.id === film.id)
        }
    })
    console.log("films with planet!", filmsToShow)


    return <>
        <p>Planet Show Page - {planet.name}</p>
        <br />
        <p>Population - {planet.population}</p>
        <br />
        <p>Diameter - {planet.diameter}</p>
    </>
};
