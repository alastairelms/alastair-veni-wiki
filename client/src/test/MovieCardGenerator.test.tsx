import "@testing-library/jest-dom";
import {
	dateToYear,
	MovieCardGenerator,
} from "../components/MovieCardGenerator";
import { render, screen } from "@testing-library/react";
import { client } from "../client";
import { ApolloProvider } from "@apollo/client";
import { MemoryRouter as Router } from 'react-router-dom'

describe("when displaying the home page", () => {
	it("returns year from date string", () => {
		const date = "2017-01-01";
		const result = dateToYear(date);
		expect(result).toBe("2017");
	});
});

describe("MovieCardGenerator component", () => {
	it('displays "Loading..." when waiting on GraphQL response', () => {
		render(
			<ApolloProvider client={client}>
				<Router>
					<MovieCardGenerator />
				</Router>
			</ApolloProvider>
		);
		const card = screen.getByText(/Loading.../);
		expect(card).toBeInTheDocument();
	});
		
	const filmTitles: Record<string, boolean> = {
		'The Phantom Menace': true,
		'Attack of the Clones': true,
		'Revenge of the Sith': true,
		'A New Hope': true,
		'The Empire Strikes Back': true,
		'Return of the Jedi': true,
	}
	Object.entries(filmTitles).map(([film]) => it(`'${film} is in the document`, async () => {
		render(
			<ApolloProvider client={client}>
				<Router>
					<MovieCardGenerator />
				</Router>
			</ApolloProvider>
		);
		const testCase = await screen.findByText(film)
		expect(testCase).toBeInTheDocument()
	}))
})
