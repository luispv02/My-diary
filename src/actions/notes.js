import { collection, addDoc, getDocs  } from "firebase/firestore"
import { db } from "../firebase/firebase-config";
import { getNotes } from "../helpers/getNotes";
import { types } from '../types/types'

// Create a note and save it in the firebase db
export const startNewNote = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

  
        const docRef = await addDoc(collection(db, `/${uid}/diary/notes`), newNote);
    
        dispatch(noteActive(newNote, docRef.id))
        dispatch(addNewNoteArr(newNote, docRef.id))
    }
}

// Add the created note as active
export const noteActive = (noteActive, id) => {
    return {
        type: types.noteActive,
        payload: {
            ...noteActive,
            id
        }
    }
}

// Add the created notes to the note array
const addNewNoteArr = (newNote, id) => {
    return {
        type: types.noteAddArr,
        payload: {
            ...newNote,
            id
        }
    }
}

// Get the notes from the db
export const startGetNotes = (uid) => {
    return async (dispatch) => {

        const notes = await getNotes(uid);
    
        dispatch(addNotesObtainedArr(notes))
    }
}

const addNotesObtainedArr = (notes) => {
    return {
        type: types.notesObtainedArr,
        payload: notes
    }
}

