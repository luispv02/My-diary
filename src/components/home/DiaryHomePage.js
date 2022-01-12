
import Sidebar from '../entries/Sidebar'
import DiaryNotes from '../notes/DiaryNotes'

const DiaryHomepage = () => {
    return (
        <div className="diary-content flex ">
            <div className="sidebar w-full relative flex-shrink-0">
                <Sidebar />
            </div>

            <main className="diary-notes w-full">
                <DiaryNotes />
            </main>
        </div>
    )
}

export default DiaryHomepage
