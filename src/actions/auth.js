import { types } from "../types/types"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { provider } from "../firebase/firebase-config";

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
        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email,password)
                .then(({user}) => {
                    console.log(user)
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
        signInWithPopup(auth, provider)
            .then(({user}) => {
                dispatch(login(user.displayName, user.uid))
            })
    }
}

const login = (user, uid) => {
    return {
        type: types.login,
        payload:{
            user,
            uid
        }
    }
}