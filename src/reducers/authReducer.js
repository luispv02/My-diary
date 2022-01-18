import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                user: action.payload.user,
                uid: action.payload.uid
            }

        case types.logout:
            return {}
    
        default:
            return state;
    }
}