import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebase-config";
import { types } from '../types/types'

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

const noteActive = (noteActive, id) => {
    return {
        type: types.noteActive,
        payload: {
            ...noteActive,
            id
        }
    }
}

const addNewNoteArr = (newNote, id) => {
    return {
        type: types.noteAddArr,
        payload: {
            ...newNote,
            id
        }
    }
}
