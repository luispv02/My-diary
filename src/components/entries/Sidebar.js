import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { closeSidebar } from '../../actions/sidebar'
import DiaryEntries from './DiaryEntries'

const Sidebar = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth);
    const {showMain} = useSelector(state => state.sidebar)
    
    const handleLogout= () => {
        dispatch(startLogout())
    }

    

    const hiddenSidebar = () => {
        dispatch(closeSidebar())
    }

    const handleNewNote = () => {
       dispatch(startNewNote())
    }

    const sidebarClasses = 'w-full flex flex-col  h-screen fixed duration-300 bg-slate-800 md:static z-10'

    return (
        <div className={ showMain ? `left-0 ${sidebarClasses}` : `-left-full ${sidebarClasses} `}>
        
            <div className="diary-sidebar-navbar flex justify-between items-start px-3 pt-3 text-white font-medium ">
                
                <h2 className="w-2.5 sm:w-1/2 md:w-full">{user}</h2>
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

            <div className="diary-sidebar-new-entry text-white text-center pt-12">
                <button
                    onClick={handleNewNote}
                >
                    <i className="far fa-calendar-plus text-7xl duration-500 hover:scale-125 hover:duration-500"></i>
                </button>
                <h1 className="font-semibold pt-2 text-2xl">New Note</h1>
            </div>

            <DiaryEntries />
        </div>

    )
}

export default Sidebar
