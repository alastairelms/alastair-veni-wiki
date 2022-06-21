/* eslint-disable testing-library/no-node-access */
import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from "@apollo/client/testing";
import { MovieCard, dateToYear, STAR_WARS_FILMS } from '../components/MovieCard';



const mocks: any[] = [
    {
        request: {
            query: STAR_WARS_FILMS,
        },
        result: {
            data: {
                allFilms: {
                    films: [
                        {
                            title: "A New Hope",
                            director: "George Lucas",
                            releaseDate: "1977-05-25"
                        },
                        {
                            title: "The Empire Strikes Back",
                            director: "Irvin Kershner",
                            releaseDate: "1980-05-17"
                        },
                        {
                            title: "Return of the Jedi",
                            director: "Richard Marquand",
                            releaseDate: "1983-05-25"
                        },
                        {
                            title: "The Phantom Menace",
                            director: "George Lucas",
                            releaseDate: "1999-05-19"
                        },
                        {
                            title: "Attack of the Clones",
                            director: "George Lucas",
                            releaseDate: "2002-05-16"
                        },
                        {
                            title: "Revenge of the Sith",
                            director: "George Lucas",
                            releaseDate: "2005-05-19"
                        }
                    ]
                }
            },
        },
    },
];

describe('when displaying the home page', () => {

    it('returns year from date string', () => {
        const date = "2017-01-01"
        const result = dateToYear(date)
        expect(result).toBe("2017")
    });

    it('renders MovieCard without error', () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MovieCard />
            </MockedProvider>,
        );

        const tree = component.toJSON();
        console.log(tree)
        // if (!Array.isArray(tree)) {
            expect(tree?.children).toContain('Loading...');
        // }
    });
    
})

