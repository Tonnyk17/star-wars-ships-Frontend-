
import ApolloClient from 'apollo-boost';
import { gql, InMemoryCache } from 'apollo-boost';

const successGetFilms = payload => ({
    type: 'SUCCESS_GET_FILMS',
    payload
})
export const getFilms = (payload) => {
    return dispatch => {
        

        const client = new ApolloClient({
            uri: 'https://swapi.apis.guru/',
            cache: new InMemoryCache()
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
            `}).then(response => dispatch(successGetFilms(response.data.allFilms)))
    }
}

export const getShips = payload => dispatch => {
    dispatch({
        type: 'GET_SHIPS',
        payload
    })
}

export const selectShip = payload => dispatch => {
    dispatch({
        type: 'SELECT_SHIP',
        payload
    })
}

export const addFavorites = payload => dispatch => {
    dispatch({
        type: 'ADD_FAVORITES',
        payload
    })
}

export const removeFavorite = payload => dispatch => {
    dispatch({
        type: 'REMOVE_FAVORITES',
        payload
    })
}
