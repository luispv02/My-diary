import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/')
    }

    return (
        <div className="register-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <div className="register-content w-3/4 bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-4 pb-4 rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4">

                <h2 className="text-white font-semilbold text-2xl">Register</h2>

                <form className="mt-2">
                    <input 
                        type="text"
                        placeholder='Name'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white  text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                    />

                    <input 
                        type="email"
                        placeholder='Email'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                    />

                    <input 
                        type="password"
                        placeholder='Confirm Password'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                    />

                    <input 
                        type="submit"
                        value="Register"
                        className="block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5 cursor-pointer"
                    />
                </form>

                <button 
                    className="text-white italic text-sm mt-4 hover:underline"
                    onClick={goToLogin}
                >Are you already registered?</button>
            </div>
        </div>
    )
}

export default Register
