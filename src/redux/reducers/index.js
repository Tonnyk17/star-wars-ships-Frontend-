
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS_GET_FILMS' :
            return{
                ...state,
                starData : action.payload
            }
        case 'SUCCESS_GET_IMAGES' :
            return{
                ...state,
                images: action.payload
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
        case  'GET_SELECT_SHIP':
                return{
                    ...state,
                    imageSelected: action.payload
                    }
        case 'GET_SHIPS_IMAGES':
                return{
                    ...state,
                    shipImages: action.payload
                } 
        case 'SUCCESS_GET_FAVORITE':
                    return{
                        ...state,
                    favorites: action.payload
                    } 
        default :
            return state
    }
}

export default reducer;