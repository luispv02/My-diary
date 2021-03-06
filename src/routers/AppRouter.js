import React, { useEffect, useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import AuthRouters from './AuthRouters'
import DiaryHomePage from '../components/home/DiaryHomePage'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { startGetNotes } from '../actions/notes'


const AppRouter = () => {
    
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid) {
                dispatch(login(user.displayName, user.uid));
                setAuthenticated(true);

                dispatch(startGetNotes(user.uid))
            }else{
                setAuthenticated(false);
            }
            setLoading(false)
        });
    }, [dispatch])

    if(loading){
        return (
            <h1 className="text-2xl font-semibold">Please wait...</h1>
        )
    }

    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoutes auth={authenticated} element={<DiaryHomePage /> }/>
            }/>

            <Route path='*' element={
                <PublicRoutes auth={authenticated} element={<AuthRouters/>} />
            }/>
                    
        </Routes>
  
    )
}

export default AppRouter
