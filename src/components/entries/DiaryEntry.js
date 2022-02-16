import moment from 'moment'
import { useDispatch } from 'react-redux'
import { noteActive } from '../../actions/notes'
import { closeSidebar } from '../../actions/sidebar'
import { motion } from "framer-motion"

const DiaryEntry = ({title,body,date,id,url}) => {

    const dispatch = useDispatch()
    const noteDate = moment(date)

    const handleNoteActive = () => {
        dispatch(noteActive({title,body,date,url}, id));
        dispatch(closeSidebar())
    }

    return (
        <motion.div 
            className="diary-entry h-16 bg-white m-3 mb-4 rounded-md overflow-hidden flex flex-row h-18 cursor-pointer"
            onClick={handleNoteActive}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: .5}}
        >
            {
                (url)
                && <div className="diary-entry-image w-16 flex-none">
                    <img 
                        src={url}
                        alt='img user'
                        className='w-full h-full'
                    />
                </div>
            }
            

            <div className="diary-entry-info p-2 flex items-center flex-auto">
                <p className="text-sm font-semibold leading-4">{title}</p>
            </div>

            <div className="diary-entry-date flex flex-col items-center justify-center pr-1">
                <p className="text-xs">{noteDate.format('dddd')}</p>
                <p className="text-xs font-bold">{noteDate.format('Do')}</p>
            </div>
        </motion.div>
    )
}

export default DiaryEntry
