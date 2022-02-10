
import { useSelector } from 'react-redux'
import Sidebar from '../entries/Sidebar'
import DiaryNotes from '../notes/DiaryNotes'
import NothingSelected from '../notes/NothingSelected'

const DiaryHomepage = () => {

    const { active } = useSelector(state => state.note);

    return (
        <div className="diary-content flex w-full">
            <div className="sidebar">
                <Sidebar />
            </div>

            <main className="main-diary-notes  w-full ">

                {
                    active
                    ? <DiaryNotes />
                    : <NothingSelected />
                }
            
            </main>
        </div>
    )
}

export default DiaryHomepage
