import '@testing-library/jest-dom'
import { dateToYear, MovieCard } from '../components/MovieCard';
import { render, screen } from '@testing-library/react';
import { client } from '../client'
import { ApolloProvider } from '@apollo/client';

describe('when displaying the home page', () => {
    it('returns year from date string', () => {
        const date = "2017-01-01"
        const result = dateToYear(date)
        expect(result).toBe("2017")
    })
})

describe('MovieCard component', () => {
    it('displays "Loading..." when waiting on GraphQL response', () => {
        render(
            <ApolloProvider client={client}>
                <MovieCard />
            </ApolloProvider>
        )
        const card = screen.getByText(/Loading.../)
        expect(card).toBeInTheDocument()
    })
    it('renders the Movie title', async () => {
        render(
            <ApolloProvider client={client}>
                <MovieCard />
            </ApolloProvider>
        )
        const movieTitle = await screen.findByText(/A New Hope/)
        expect(movieTitle).toBeInTheDocument()
    })
})

