import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { removeError, showError } from "../../actions/ui";
import { restorePassword } from "../../actions/auth";
import Swal from "sweetalert2";


const ResetPassword = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {msgError = ''} = useSelector(state => state.ui);

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

    return (
        <div className="login-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <div className="login-content bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-10 pb-6  w-3/4 rounded-md relative sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img 
                    src='user.png'
                    className='w-20 absolute left-2/4 -translate-x-1/2 -top-12'
                />

                <h2 className="text-white font-semilbold text-2xl">Restore Password</h2>

                {
                    msgError && <p className="text-center text-sm text-white p-2 mt-3 leading-4 rounded-md bg-red-600  shadow-lg shadow-gray-800 ">{msgError}</p>
                }

                <form
                    onSubmit={handleReset}
                >
                    <div className="relative">
                        <i className="fas fa-user text-white absolute bottom-1"></i>
                        <input 
                            type="email"
                            placeholder='Email'
                            className="w-full bg-transparent border-b border-white pl-6 mt-4 placeholder-white text-white focus:outline-0 focus:border-b-blue-900 duration-200 text-sm"
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* <div className="relative">
                        <i className="fas fa-lock text-white absolute bottom-1"></i>
                        <input 
                            type="password"
                            placeholder='Password'
                            className="w-full bg-transparent border-b border-white pl-6 mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                            name='password'
    
                        />
                    </div> */}
                    
                    <input
                        type="submit"
                        value='Send Email'
                        className="block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5 cursor-pointer"
                    />
                </form>

                <div className="create-change">
                    <button 
                        className="italic hover:underline font-light text-sm text-white"
                        onClick={() => navigate('/login')}
                    >Login</button>


                </div>
            </div>
        </div>
    )
};

export default ResetPassword;

