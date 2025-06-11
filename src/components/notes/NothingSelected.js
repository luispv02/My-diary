import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../../actions/sidebar'


const NothingSelected = () => {

    const dispatch = useDispatch()
    const showSidebar = () => {
        dispatch(openSidebar())
    }

  return (
    <div className="nothing-selected bg-slate-600 h-screen flex flex-col">
        
        <div className="nothing-selected-hamburger text-center pt-3 md:hidden mx-auto">
            <img src="hamburger.png" alt="hamburger icon" width="25" className="text cursor-pointer text-white" onClick={showSidebar}/>
        </div>
        

        <motion.div 
            className="nothing-selected-content text-white text-sm h-screen flex flex-col items-center justify-center"
            initial={{scale: .8}}
            animate={{scale: 1}}
            transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}}
        >
                <img src="close.png" alt="close icon" width="50" className="mb-4" />
                <h2>No active note</h2>
                <h2>Create or select one</h2>
        </motion.div>
        
        
    </div>
  )
}

export default NothingSelected