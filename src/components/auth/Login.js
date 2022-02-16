import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginWithEmailAndPassword, signInWithGoogle } from '../../actions/auth'
import useForm from '../../hooks/useForm'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {disabledBtn} = useSelector(state => state.ui);

    const [inputValue, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const {email, password} = inputValue;
   

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginWithEmailAndPassword(email, password))
    }

    const handleLoginGoogle = () => {
        dispatch(signInWithGoogle())
    }

    const classBtn = 'block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5'
    
    return (
        <div className="login-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <motion.div 
                className="login-content bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-10 pb-6  w-3/4 rounded-md relative sm:w-1/2 md:w-1/3 lg:w-1/4"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ duration: .3}}
            >
                <img 
                    src='user.png'
                    alt='user icon'
                    className='w-20 absolute left-2/4 -translate-x-1/2 -top-12'
                />
                <form
                    onSubmit={handleLogin}
                >
                    <div className="relative">
                        <i className="fas fa-user text-white absolute bottom-1"></i>
                        <input 
                            type="email"
                            placeholder='Email'
                            className="w-full bg-transparent border-b border-white pl-6 mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-900 duration-200 text-sm"
                            name='email'
                            onChange={handleInputChange}
                            value={email}
                        />
                    </div>

                    <div className="relative">
                        <i className="fas fa-lock text-white absolute bottom-1"></i>
                        <input 
                            type="password"
                            placeholder='Password'
                            className="w-full bg-transparent border-b border-white pl-6 mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                            name='password'
                            onChange={handleInputChange}
                            value={password}
                        />
                    </div>
                    
                    <input
                        type="submit"
                        value='Login'
                        className={disabledBtn ? `cursor-not-allowed ${classBtn}` : ` cursor-pointer ${classBtn}` }
                        disabled={disabledBtn}
                    />
                </form>

                <div className="create-change">
                    <button 
                        className="italic hover:underline font-light text-sm float-right text-white"
                        onClick={() => navigate('/reset')}
                    >Forgot password?</button>

                    <button 
                        className="italic hover:underline font-light text-sm float-left text-white
                        "
                        onClick={() => navigate('/register')}
                    >Create Account</button>
                </div>

                <div className="login-google  mt-14">
                    <h3 className="text-white">Login with social networks</h3> 
                    <div 
                        className="login-google-button flex items-center bg-blue-500 p-1  cursor-pointer hover:shadow-md hover:shadow-gray-500 duration-200"
                        onClick={handleLoginGoogle}
                        >
                        <img 
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            alt='icon google'
                            className="bg-white p-2 w-9 h-9"
                        />
                        <p className="text-white font-semibold m-auto">Sign in with Google</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Login
