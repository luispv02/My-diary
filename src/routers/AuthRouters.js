import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import ResetPassword from '../components/auth/ResetPassword'

const AuthRouters = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register"  element={<Register /> }/>
            <Route path="/reset" element={ <ResetPassword /> }/>

        </Routes>
    )
}

export default AuthRouters
