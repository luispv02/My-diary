import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const getNotes = async (uid) => {

    const notes = []

    const notesDb = await getDocs(collection(db, `/${uid}/diary/notes`));

    notesDb.forEach(note => {
        notes.push({
            id: note.id,
            ...note.data()
        })
    })

    return notes
}