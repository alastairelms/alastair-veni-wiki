import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

const FILM_INFO = gql`
query filmInfo {
    allFilms {
    films {
        created
        director
        edited
        episodeID
        id
        openingCrawl
        releaseDate
        title
        producers   
        }
    }
}
`




export const MovieShowPage = () => {
    
    const { id } = useParams()
    
    // const { loading, error, data } = useQuery(FILM_INFO);

    // console.log(await data)

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :</p>;

    return (
        <>
            I am the page {id}
        </>
    )
}
