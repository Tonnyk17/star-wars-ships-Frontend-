
import ApolloClient from 'apollo-boost';
import { gql, InMemoryCache } from 'apollo-boost';

const successGetFilms = payload => ({
    type: 'SUCCESS_GET_FILMS',
    payload
});
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

const succesGetImages = payload => ({
    type: "SUCCESS_GET_IMAGES",
    payload
});

export const getImages = (payload) => {
    return dispatch => {
        const client = new ApolloClient({
            uri: 'http://localhost:8000/',
            cache: new InMemoryCache()
        });

        client.query({
            query: gql`
            {
                films{
                _id
                EpisodeID
                src
                ships{
                    id
                    name
                    url
                }
            }
            }
            `}).then(response => dispatch(succesGetImages(response.data.films)))
    }
} 
const successGetFavorite = payload => dispatch => {
    dispatch({
        type: "SUCCESS_GET_FAVORITE",
        payload
    })
};

export const getFavorites = (payload) => {
    return dispatch => {
        const client = new ApolloClient({
            uri: 'http://localhost:8000/',
            cache: new InMemoryCache()
        });

        client.query({
            query: gql`
            {
                ship{
                    id
                    image
                    name
                    model
                    starshipClass
                    manufacturers
                    costInCredits
                    length
                    crew
                    passengers
                    maxAtmospheringSpeed
                    movies
                }
            }
        
            `}).then(response => dispatch(successGetFavorite(response.data)))
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
export const getSelectShip = payload => dispatch => {
    dispatch({
        type: 'GET_SELECT_SHIP',
        payload
    })
}

export const getShipsImages = payload => dispatch => {
    dispatch({
        type: 'GET_SHIPS_IMAGES',
        payload
    })
}
