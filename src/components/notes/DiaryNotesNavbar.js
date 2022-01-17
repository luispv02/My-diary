import React from 'react'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../../actions/actions'



const DiaryNotesNavbar = () => {

    const dispatch = useDispatch()

    const showSidebar = () => {
        dispatch(openSidebar())
    }

    return (
        <div className="diary-navbar bg-cyan-600 flex justify-between px-2 py-3 text-white w-full">
            <div className="diary-navbar-date">
                <p>January 11, 2022</p>
            </div>

            <div className="diary-navbar-icon-hambuger absolute left-2/4 -translate-x-1/2  md:hidden">
                <i 
                    className="fas fa-bars text cursor-pointer"
                    onClick={showSidebar}
                ></i>
            </div>

            <div className="diary-navbar-save">
                <a href="!#" className="mr-2 cursor-pointer hover:text-gray-300 duration-200">Picture</a>
                <a href="!#" className=" cursor-pointer hover:text-gray-300 duration-200">Save</a>
            </div>
        </div>
    )
}

export default DiaryNotesNavbar
