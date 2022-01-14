import React from 'react'

const DiaryEntry = () => {
    return (
        <div className="diary-entry bg-white m-3 mb-4 rounded-md overflow-hidden flex flex-row">
            <div className="diary-entry-image w-16 flex-none">
                <img 
                    src='https://ximagen.com/images/2019/03/10/imagenes-bonitas.jpg' 
                    className='w-full h-full'
                />
            </div>

            <div className="diary-entry-info p-2 flex-auto">
                <p className="text-sm font-semibold">Title Note</p>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="diary-entry-date flex flex-col items-center justify-center pr-1">
                <p className="text-xs">Monday</p>
                <p className="text-xs font-bold">30</p>
            </div>
        </div>
    )
}

export default DiaryEntry
