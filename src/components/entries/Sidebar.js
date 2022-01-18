import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeSidebar } from '../../actions/sidebar'
import DiaryEntries from './DiaryEntries'

const Sidebar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout= () => {
        navigate('/login')
    }

    const {showMain} = useSelector(state => state.showSidebar)
    console.log(showMain)

    const hiddenSidebar = () => {
        dispatch(closeSidebar())
    }

    return (
        <div className={ showMain ? 'left-0 content-sidebar w-full  flex flex-col bg-slate-800 pb-2 h-screen fixed z-10 duration-300 md-static' : "w-full -left-full fixed duration-300 bg-slate-800 z-20 flex flex-col h-screen md:static"}>
        
            <div className="diary-sidebar-navbar flex justify-between px-3 pt-3 text-white font-medium ">
                
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

            <div className="diary-sidebar-new-entry text-white text-center pt-12">
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
