import { types } from "../types/types"

const initialState = {
    notes: [],
    active: null,
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.noteActive:
            return {
                ...state,
                active: action.payload
            }
        
        case types.noteAddArr:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        
        case types.notesObtainedArr:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.noteSaveEdit: 
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload
                    : note
                )
            }

        case types.noteDelete:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null
            }

        case types.noteCleaning:
            return {
                ...state,
                notes: [],
                active: null
            }

        default:
            return state
    }
}