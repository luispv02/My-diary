import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Sidebar from '../components/entries/Sidebar'
import AuthRouters from './AuthRouters'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login />}/>

                <Route path='*' element={ <AuthRouters />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
