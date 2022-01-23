import { types } from "../types/types"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut  } from "firebase/auth";
import { googleProvider } from "../firebase/firebase-config";
import Swal from 'sweetalert2'
import { activeBtn, disableBtn} from "./ui";
import { closeSidebar } from "./sidebar";

//Register user with email and password
export const registerUserWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then( async ({user}) => {
                    console.log(user)
                    await updateProfile(user, {displayName: name})
                    dispatch(login(user.displayName, user.uid))
                })
                .catch(error => {
                    console.log(error)
                    if(error.code === 'auth/email-already-in-use'){
                        Swal.fire({icon: 'error', text: 'Email already registered'});
                    }
                })
    }
}

//Login with email and password
export const loginWithEmailAndPassword = (email, password) => {
    return (dispatch) => {

            dispatch(disableBtn())

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email,password)
                .then(({user}) => {
                    dispatch(login(user.displayName, user.uid));
                    dispatch(activeBtn())
                    dispatch(closeSidebar());
                    console.log(user)
                })
            .catch(error => {
                console.log(error)
                dispatch(activeBtn())
                if(error.code === 'auth/invalid-email'){
                    Swal.fire({icon: 'error', text: 'Enter Email'});
                }else if(error.code === 'auth/internal-error'){
                    Swal.fire({icon: 'error', text: 'Enter your password'});
                }else if(error.code === 'auth/wrong-password'){
                    Swal.fire({icon: 'error', text: 'Password invalid'});
                }else if(error.code === 'auth/user-not-found'){
                    Swal.fire({icon: 'error', text: 'Unregistered mail'});
                }else if(error.code === 'auth/too-many-requests'){
                    Swal.fire({icon: 'info', text: 'Access to this account has been temporarily disabled due to many failed login attempts. Please reset your password or try again later.'});
                }
                
            })
    }
}

// Restore password
export const restorePassword = (email) => {
    return () => {
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({icon: 'success', text: 'Email send'});
    
            }) 
            .catch(error => {
                console.log(error)
                Swal.fire({icon: 'info', text: 'Unregistered mail'});
            })
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


export const login = (displayName, uid) => {
    return {
        type: types.login,
        payload:{
            displayName,
            uid
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout());
                
            })
    }
}


export const logout = () => {
    return {
        type: types.logout
    }
}