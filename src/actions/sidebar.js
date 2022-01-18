import { types } from "../types/types"

export const openSidebar = () => {
    return {
        type: types.openSidebar
    }
}

export const closeSidebar = () => {
    return {
        type: types.closeSidebar
    }
}
