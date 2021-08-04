
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS_GET_FILMS' :
            return{
                ...state,
                starData : action.payload
            }
        default :
            return state
    }
}

export default reducer;