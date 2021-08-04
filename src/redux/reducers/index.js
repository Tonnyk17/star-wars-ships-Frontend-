
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
        default :
            return state
    }
}

export default reducer;