import React from 'react'
import { useSelector } from 'react-redux'
import DiaryEntry from './DiaryEntry'

const DiaryEntries = () => {

    const { notes } = useSelector(state => state.note);

    return (
        <div className="diary-entries overflow-y-scroll  mt-6">
            {
                notes.map(note => (
                    <DiaryEntry 
                        key={note.id}
                        {...note}
                    />
                ))
            }
        </div>
    )
}

export default DiaryEntries
