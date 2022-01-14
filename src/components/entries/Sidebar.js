import React from 'react'
import { hiddenSidebar } from '../../helpers/helpers'
import DiaryEntries from './DiaryEntries'

const Sidebar = () => {

    

    return (
        <div className="content-sidebar flex flex-col bg-slate-800 pb-2 h-screen fixed w-full z-10 -top-full duration-300">
            <div className="diary-sidebar-navbar flex justify-between px-3 pt-4 text-white font-medium ">
                
                <h2>LuisPv</h2>
                <button className="hover:text-gray-300">
                    Logout
                </button>
                
                <i 
                    className="fas fa-chevron-up text-lg absolute left-2/4 -translate-x-1/2 cursor-pointer"
                    onClick={ hiddenSidebar }
                ></i>
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
