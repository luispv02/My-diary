import { collection, addDoc, doc, updateDoc   } from "firebase/firestore"
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { getNotes } from "../helpers/getNotes";
import { uploadImage } from "../helpers/uploadImage";
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

// Add the extracted notes to the notes array
const addNotesObtainedArr = (notes) => {
    return {
        type: types.notesObtainedArr,
        payload: notes
    }
}

// Save note edit in db
export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        if(!note.url){
            delete note.url
        }

        const noteRref = doc(db, `/${uid}/diary/notes/${note.id}`);
        await updateDoc(noteRref, note);
        dispatch(saveNote(note))

        Swal.fire({icon: 'success', text: 'Note saved'});
    }
}

// Save edited note to component and show it
const saveNote = (note) => {
    return {
        type: types.noteSaveEdit,
        payload: note
    }
}

// Add image link to note url
export const startGetImageUrl = (file) => {
    return async (dispatch,getState) => {

        const {active:note} = getState().note;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })
    
        const imageUrl = await uploadImage(file);
        note.url = imageUrl;
        dispatch(startSaveNote(note))

    }
}