import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/auth/Register'
import Sidebar from '../components/entries/Sidebar'
import DiaryNotes from '../components/notes/DiaryNotes'
import DiaryHomePage from '../components/home/DiaryHomePage'

const AuthRouters = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />

            <Route path="/home"  element={<DiaryHomePage /> }/>

        </Routes>
    )
}

export default AuthRouters
