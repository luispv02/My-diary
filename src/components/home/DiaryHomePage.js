
import Sidebar from '../entries/Sidebar'
import DiaryNotes from '../notes/DiaryNotes'

const DiaryHomepage = () => {
    return (
        <div className="diary-content flex w-full">
            <div className="sidebar">
                <Sidebar />
            </div>

            <main className="main-diary-notes  w-full ">
                <DiaryNotes />
            </main>
        </div>
    )
}

export default DiaryHomepage
