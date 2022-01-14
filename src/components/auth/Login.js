import React from 'react'

const Login = () => {
    return (
        <div className="login-main-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <div className="login-content bg-white bg-opacity-30 backdrop-blur-sm px-3 pt-10 pb-6  w-3/4 rounded-md relative">
                <img 
                    src='user.png'
                    className='w-20 absolute left-2/4 -translate-x-1/2 -top-12'
                />
{/* 
                <h2
                    className="text-3xl text-center font-semidold text-white py-2"
                >Login</h2> */}

                <form>
                    <div className="relative">
                        <i className="fas fa-user text-white absolute bottom-1"></i>
                        <input 
                            type="text"
                            placeholder='Email'
                            className="w-full bg-transparent border-b border-white pl-6 focus:outline-none mt-3 placeholder-white text-white"
                        />
                    </div>

                    <div className="relative">
                        <i className="fas fa-lock text-white absolute bottom-1"></i>
                        <input 
                            type="password"
                            placeholder='Password'
                            className="w-full bg-transparent border-b border-white pl-6 focus:outline-none mt-3 placeholder-white text-white"
                        />
                    </div>
                    

                    <button
                        className="block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5"
                    >Login</button>

                    <a href="!#" className="italic hover:underline font-light text-sm float-right text-white">Forgot password?</a>
                    <a href="!#" className="italic hover:underline font-light text-sm float-left text-white">Create Account</a>

                </form>

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
