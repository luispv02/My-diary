import { types } from "../types/types"

const initialState = {
    showMain: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openSidebar:
            return {
                ...state,
                showMain: true
            }

        case types.closeSidebar:
                return {
                    ...state,
                    showMain: false
                }

        default:
            return state
    }
}