import moment from 'moment'
import { useDispatch } from 'react-redux'
import { noteActive } from '../../actions/notes'
import { closeSidebar } from '../../actions/sidebar'

const DiaryEntry = ({title,body,date,id,url}) => {

    const dispatch = useDispatch()
    const noteDate = moment(date)

    const handleNoteActive = () => {
        dispatch(noteActive({title,body,date,url}, id));
        dispatch(closeSidebar())
    }

    return (
        <div 
            className="diary-entry bg-white m-3 mb-4 rounded-md overflow-hidden flex flex-row h-18 cursor-pointer"
            onClick={handleNoteActive}
        >
            {
                (url)
                && <div className="diary-entry-image w-16 flex-none">
                    <img 
                        src='https://ximagen.com/images/2019/03/10/imagenes-bonitas.jpg' 
                        alt='sunset'
                        className='w-full h-full md:w-5/6'
                    />
                </div>
            }
            

            <div className="diary-entry-info p-2 flex-auto">
                <p className="text-sm font-semibold">{title}</p>
            </div>

            <div className="diary-entry-date flex flex-col items-center justify-center pr-1">
                <p className="text-xs">{noteDate.format('dddd')}</p>
                <p className="text-xs font-bold">{noteDate.format('Do')}</p>
            </div>
        </div>
    )
}

export default DiaryEntry
