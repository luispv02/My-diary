import { useDispatch } from 'react-redux'
import { openSidebar } from '../../actions/sidebar'


const NothingSelected = () => {

    const dispatch = useDispatch()
    const showSidebar = () => {
        dispatch(openSidebar())
    }

  return (
    <div className="nothing-selected bg-slate-600 h-screen flex flex-col">
        
        <div className="nothing-selected-hamburger text-center pt-3 md:hidden">
            <i 
                className="fas fa-bars text cursor-pointer text-white "
                onClick={showSidebar}
            ></i>
        </div>
        

        <div className="nothing-selected-content text-white text-sm h-screen flex flex-col items-center justify-center ">
            <i className="fas fa-times text-white text-4xl"></i>
            <h2>No active nota</h2>
            <h2>Create or select one</h2>
        </div>
        
        
    </div>
  )
}

export default NothingSelected