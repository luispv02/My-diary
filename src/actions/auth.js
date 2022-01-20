import { types } from "../types/types"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged  } from "firebase/auth";
import { googleProvider } from "../firebase/firebase-config";

//Register user with email and password
export const registerUserWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        try {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then( async ({user}) => {
                    console.log(user)
                    await updateProfile(user, {displayName: name})
                    dispatch(login(user.displayName, user.uid))
                })
        } catch (error) {
            console.log(error)
        }
    }
}

//Login with email and password
export const loginWithEmailAndPassword = (email, password) => {
    return (dispatch) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email,password)
                .then(({user}) => {
                console.log(user)
                dispatch(login(user.displayName, user.uid));
            })
        
    }
}

// Restore password
export const restorePassword = (email) => {
    return () => {
        try {
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Send Email')
            }) 
        } catch (error) {
            console.log(error)
        }
    }
}

//Sign in with google account
export const signInWithGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, googleProvider)
            .then(({user}) => {
                dispatch(login(user.displayName, user.uid))
            })
    }
}


export const login = (user, uid) => {
    return {
        type: types.login,
        payload:{
            user,
            uid
        }
    }
}