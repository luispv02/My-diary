import React from 'react'

const DiaryNotesNavbar = () => {
    return (
        <div className="diary-navbar flex bg-cyan-600 justify-between p-2 text-white w-full">
            <div className="diary-navbar-date">
                <p>January 11, 2022</p>
            </div>

            <div className="diary-navbar-save">
                <span className="mr-2">Picture</span>
                <span>Save</span>
            </div>
        </div>
    )
}

export default DiaryNotesNavbar
