import { types } from "../types/types"

export const showError = (error) => {
    return {
        type: types.showError,
        payload:{
            msg: error
        }
    }
}

export const removeError = () => {
    return {
        type: types.removeError
    }
}

export const disableBtn = () => {
    return {
        type: types.disableButton
    }
}

export const activeBtn = () => {
    return {
        type: types.activeButton
    }
}