
import DiaryNotesNavbar from './DiaryNotesNavbar'

const DiaryNotes = () => {
    return (
        <div className="diary-content flex flex-col h-screen">
            <DiaryNotesNavbar />

            <div className="diary-notes-content p-3 flex flex-col h-full">
                <input 
                    type="text"
                    placeholder='Note Title'
                    className='text-2xl focus:outline-none font-semibold text-gray-800'
                />

                <textarea
                    placeholder='What happened in your day'
                    className='mt-4 text-1xl focus:outline-none resize-none w-full flex-auto'
                ></textarea>

                <div className="diary-note-image">
                    <img 
                        src='https://ximagen.com/images/2019/03/10/imagenes-bonitas.jpg'
                        className='w-40 ' 
                    />
                </div>
            </div>
        </div>
    )
}

export default DiaryNotes
