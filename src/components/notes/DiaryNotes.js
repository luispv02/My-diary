import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import DiaryNotesNavbar from './DiaryNotesNavbar'
import { noteActive, startDeleteNote } from '../../actions/notes'

const DiaryNotes = () => {

    const dispatch = useDispatch()
    const { active:note } = useSelector(state => state.note);

    const [formValues, handleInputChange,reset] = useForm(note);
    const { title, body, id } = formValues

    const activeId = useRef(note.id);
    
    useEffect(() => {
        if(activeId.current !== note.id){
            reset(note)
            activeId.current = note.id 
        }
    }, [note, reset]);


    useEffect(() => {
        dispatch(noteActive(formValues, formValues.id))
    }, [dispatch, formValues]);

    const handleDelete = () => {
        dispatch(startDeleteNote(id))
    }

  
    return (
        <div className="main-diary-content flex flex-col h-screen">
            <DiaryNotesNavbar />

            <div className="diary-notes-content p-3 flex flex-col h-full">
                <input 
                    type="text"
                    placeholder='Note Title'
                    className='text-2xl focus:outline-none font-semibold text-gray-800'
                    onChange={handleInputChange}
                    name='title'
                    value={title}
                />

                <textarea
                    placeholder='What happened in your day'
                    className='mt-4 text-1xl focus:outline-none resize-none w-full flex-auto'
                    onChange={handleInputChange}
                    name='body'
                    value={body}
                ></textarea>

                {
                   ( note.url)
                    && <div className="diary-note-image">
                            <img 
                                src={note.url}
                                alt='image user'
                                className='w-48' 
                            />
                        </div>
                }
            </div>

            <button
               className="bg-red-600 py-2 text-white duration-100 hover:bg-red-700"
               onClick={handleDelete}
            >Delete</button>
        </div>
    )
}

export default DiaryNotes
