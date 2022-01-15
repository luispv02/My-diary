import React from 'react'
import { useNavigate } from 'react-router-dom'
import { hiddenSidebar } from '../../helpers/helpers'
import DiaryEntries from './DiaryEntries'

const Sidebar = () => {

    const navigate = useNavigate()

    const handleLogout= () => {
        navigate('/')
    }

    return (
        <div className="content-sidebar w-full  flex flex-col bg-slate-800 pb-2 h-screen fixed z-10 -left-full duration-300  md:static">
            <div className="diary-sidebar-navbar flex justify-between px-3 pt-4 text-white font-medium ">
                
                <h2>LuisPv</h2>
                <button 
                    className="hover:text-gray-300"
                    onClick={handleLogout}
                >Logout</button>
                
                <div className="icon-hidden-sidebar absolute left-2/4 -translate-x-1/2 md:hidden">
                    <i 
                        className="fas fa-times text-lg cursor-pointer"
                        onClick={ hiddenSidebar }
                    ></i>
                </div>
            </div>

            <div className="diary-sidebar-new-entry text-white text-center pt-16">
                <button className="">
                    <i className="far fa-calendar-plus text-7xl duration-500 hover:scale-125 hover:duration-500"></i>
                </button>
                <h1 className="font-semibold pt-2 text-2xl">New Note</h1>
                
            </div>

            <DiaryEntries />
        </div>

    )
}

export default Sidebar
