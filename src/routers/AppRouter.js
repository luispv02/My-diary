import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
