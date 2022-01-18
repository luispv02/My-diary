import { types } from "../types/types";

const initialState = {
    msgError: null
}


export const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case types.showError:
            return {
                ...state,
                msgError: action.payload.msg
            }
        
        case types.removeError:
            return {
                ...state,
                msgError: null
            }
    
        default:
            return state;
    }
}