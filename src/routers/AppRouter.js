import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Sidebar from '../components/entries/Sidebar'
import AuthRouters from './AuthRouters'
import DiaryHomePage from '../components/home/DiaryHomePage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <DiaryHomePage />}/>

                <Route path='*' element={ <AuthRouters />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
