import { types } from "../types/types";

const initialState = {
    msgError: null,
    disabledBtn: false,
}


export const uiReducer = (state = initialState, action) => {
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

        case types.disableButton:
            return {
                ...state,
                disabledBtn: true
            }

        case types.activeButton:
            return {
                ...state,
                disabledBtn: false
            }
    
        default:
            return state;
    }
}