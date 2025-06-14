import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../../actions/ui";
import { restorePassword } from "../../actions/auth";
import Swal from "sweetalert2";
import { motion } from "framer-motion";


const ResetPassword = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {disabledBtn} = useSelector(state => state.ui);

    const [{email}, handleInputChange] = useForm({
        email: ''
    })

    const handleReset = (e) => {
        e.preventDefault();

        if(!validator.isEmail(email) ){
            Swal.fire({icon: 'error', text: 'Email invalid'});
            return false
        }

        dispatch(removeError())
        dispatch(restorePassword(email))
    }

    const classBtn = 'block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5 '

    return (
        <div className="login-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <motion.div 
                className="reset-content bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-10 pb-6  w-3/4 rounded-md relative sm:w-1/2 md:w-1/3 lg:w-1/4"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ duration: .3}}
            >
                <img 
                    src='user.png'
                    alt='user icon'
                    className='w-20 absolute left-2/4 -translate-x-1/2 -top-12'
                />

                <h2 className="text-white font-semilbold text-2xl">Restore Password</h2>

                <form
                    onSubmit={handleReset}
                >
                    <div className="relative flex items-center border-b border-white pb-1 mt-4">
                         <img src="user-white.png" alt="user icon" width="20" />
                        <input 
                            type="email"
                            placeholder='Email'
                            className="w-full bg-transparent pl-2 placeholder-white text-white focus:outline-0 focus:border-b-blue-900 duration-200 text-sm"
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>

                    <input
                        type="submit"
                        value='Send Email'
                        className={disabledBtn ? `cursor-not-allowed ${classBtn}` : `cursor-pointer ${classBtn}`}
                        disabled={disabledBtn}
                    />
                </form>

                <div className="create-change">
                    <button 
                        className="italic hover:underline font-light text-sm text-white"
                        onClick={() => navigate('/login')}
                    >Login</button>


                </div>
            </motion.div>
        </div>
    )
};

export default ResetPassword;

