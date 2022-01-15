import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register')
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home')
    }

    return (
        <div className="login-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <div className="login-content bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-10 pb-6  w-3/4 rounded-md relative sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img 
                    src='user.png'
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
                        />
                    </div>

                    <div className="relative">
                        <i className="fas fa-lock text-white absolute bottom-1"></i>
                        <input 
                            type="password"
                            placeholder='Password'
                            className="w-full bg-transparent border-b border-white pl-6 mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                        />
                    </div>
                    
                    <input
                        type="submit"
                        value='Login'
                        className="block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5 cursor-pointer"
                    />
                </form>

                <div className="create-change">
                    <button 
                        className="italic hover:underline font-light text-sm float-right text-white"
                    >Forgot password?</button>

                    <button 
                        className="italic hover:underline font-light text-sm float-left text-white
                        "
                        onClick={goToRegister}
                    >Create Account</button>
                </div>

                <div className="login-google  mt-14">
                    <h3 className="text-white">Login with social networks</h3> 
                    <div className="login-google-button flex items-center bg-blue-500 p-1  cursor-pointer hover:shadow-md hover:shadow-gray-500 duration-200">
                        <img 
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            className="bg-white p-2 w-9 h-9"
                        />
                        <p className="text-white font-semibold m-auto">Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
