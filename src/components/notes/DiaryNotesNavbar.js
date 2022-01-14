import React from 'react'
import { showSidebar } from '../../helpers/helpers'

const DiaryNotesNavbar = () => {

    

    return (
        <div className="diary-navbar flex bg-cyan-600 justify-between px-2 py-3 text-white w-full">
            <div className="diary-navbar-date">
                <p>January 11, 2022</p>
            </div>

            <div className="diary-navbar-icon-hambuger absolute left-2/4 -translate-x-1/2">
                <i 
                    className="fas fa-bars text cursor-pointer"
                    onClick={showSidebar}
                ></i>
            </div>

            <div className="diary-navbar-save">
                <span className="mr-2">Picture</span>
                <span>Save</span>
            </div>
        </div>
    )
}

export default DiaryNotesNavbar
