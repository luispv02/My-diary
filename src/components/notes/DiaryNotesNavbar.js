import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';
import { openSidebar } from '../../actions/sidebar'



const DiaryNotesNavbar = () => {

    const dispatch = useDispatch()
    const {active} = useSelector(state => state.note);


    const showSidebar = () => {
        dispatch(openSidebar())
    }

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    return (
        <div className="diary-navbar bg-cyan-600 flex justify-between px-2 py-3 text-white w-full">
            <div className="diary-Lnavbar-date w-36 sm:w-1/2">
                <p>{moment(new Date()).format('dddd, LL')}</p>
            </div>

            <div className="diary-navbar-icon-hambuger absolute left-2/4 -translate-x-1/2  md:hidden">
                <i 
                    className="fas fa-bars text cursor-pointer"
                    onClick={showSidebar}
                ></i>
            </div>

            <div className="diary-navbar-save">
                <button 
                    href="!#" 
                    className="mr-2 cursor-pointer hover:text-gray-300 duration-200"
                >Picture</button>

                <button 
                    href="!#" 
                    className=" cursor-pointer hover:text-gray-300 duration-200"
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}

export default DiaryNotesNavbar
