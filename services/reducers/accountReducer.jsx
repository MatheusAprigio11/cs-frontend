import {
    RESET_STATE,
    SET_TOKEN,
    SET_ACCOUNT_DATA,
} from "./actions";

const initialSTate = {
    token: '',
    accountData: {},
}



function userReducer(state = initialSTate, action) {
    switch (action.type) {
        case RESET_STATE:
            return initialSTate;
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_ACCOUNT_DATA:
            return { ...state, accountData: action.payload }
        default:
            return state;
    }
}


export default userReducer;