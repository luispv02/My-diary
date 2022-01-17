import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/auth/Register'
import Sidebar from '../components/entries/Sidebar'
import DiaryNotes from '../components/notes/DiaryNotes'
import DiaryHomePage from '../components/home/DiaryHomePage'
import Login from '../components/auth/Login'

const AuthRouters = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/register"  element={<Register /> }/>

        </Routes>
    )
}

export default AuthRouters
