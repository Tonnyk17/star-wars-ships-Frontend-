
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS_GET_FILMS' :
            return{
                ...state,
                starData : action.payload
            }

        case 'GET_SHIPS' :
            return{
                ...state,
                ships: action.payload
            }

        case  'SELECT_SHIP':
            return{
                ...state,
                shipSelected: action.payload
            }
        case  'ADD_FAVORITES':
                return{
                    ...state,
                    favorites: [action.payload]
                }
        case  'REMOVE_FAVORITES':
            console.log(action.payload)
                return{
                    ...state,
                    favorites: state.favorites.filter(item => item.id !== action.payload)
                    }
        default :
            return state
    }
}

export default reducer;