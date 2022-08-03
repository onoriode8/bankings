import * as actionAuthentication from './actions';

const initialState = {
        isAuthentication: true,
        hideBalance: true
    }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionAuthentication.LOGIN):
            return {
                ...state,
                isAuthentication: true
            }
        case(actionAuthentication.LOGOUT):
            return {
                ...state,
                isAuthentication: false
            }
        case(actionAuthentication.HIDE_BALANCE):
            return {
                ...state,
                hideBalance: !state.hideBalance
            }
        default:
            return state;
    }
   
}

export default reducer;