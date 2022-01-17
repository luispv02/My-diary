import React from 'react'
import DiaryEntry from './DiaryEntry'

const DiaryEntries = () => {

    const entries = [1,2,3,4,5,6]

    return (
        <div className="diary-entries overflow-y-scroll  mt-6">
            {
                entries.map(entry => (
                    <DiaryEntry 
                        key={entry}
                    />
                ))
            }
        </div>
    )
}

export default DiaryEntries
