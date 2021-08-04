
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const startGetFilms = payload => ({
    type: 'START_GET_FILMS',
    ...payload
})

const successGetFilms = payload => ({
    type: 'SUCCESS_GET_FILMS',
    payload
})
export const getFilms = (payload) => {
    return dispatch => {
        dispatch(startGetFilms());

        const client = new ApolloClient({
            uri: 'https://swapi.apis.guru/'
        });

        client.query({
            query: gql`
                 {
                allFilms{
            films {
            id
            title
            episodeID
            starshipConnection {
                starships {
                id
                name
                model
                starshipClass
                manufacturers
                costInCredits
                length
                maxAtmospheringSpeed
                crew
                passengers
                filmConnection{
                    films{
                    episodeID
                    title
                    }
                }
                }
            }
            }
    }
    }
            `}).then(response => dispatch(successGetFilms(response.data)))
    }
}
  
