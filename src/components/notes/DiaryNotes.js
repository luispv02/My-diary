import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import DiaryNotesNavbar from './DiaryNotesNavbar'
import { noteActive } from '../../actions/notes'

const DiaryNotes = () => {

    const dispatch = useDispatch()
    const { active:note } = useSelector(state => state.note);

    const [formValues, handleInputChange,reset] = useForm(note);
    const { title, body } = formValues

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
                    note.useSelector
                    && <div className="diary-note-image">
                            <img 
                                src='https://ximagen.com/images/2019/03/10/imagenes-bonitas.jpg'
                                alt='sunset'
                                className='w-40' 
                            />
                        </div>
                }
            </div>
        </div>
    )
}

export default DiaryNotes
