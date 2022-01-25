import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, showError } from '../../actions/ui';
import { registerUserWithEmailAndPassword } from '../../actions/auth';

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {msgError = null, disabledBtn} = useSelector(state => state.ui);


    const [inputValue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const {name,email, password, password2} = inputValue;

    const handleRegister = (e) => {
        e.preventDefault();

        if(formValid()){
            dispatch(registerUserWithEmailAndPassword(email, password, name))
        }
    }

    const formValid = () => {
        if(name.trim().length < 4){
            dispatch(showError('The name must contain more than 4 characters'))
            return false
        }else if(!validator.isEmail(email)){
            dispatch(showError('Email invalid'))
            return false;
        }else if(password.length < 6 || password !== password2){
            dispatch(showError('Passwords must be the same and contain more than 6 characters'))
            return false;
        }

        dispatch(removeError())
        return true;
    
    }

    const handleGoLogin = () => {
        navigate('/login');
        dispatch(removeError())
    }

    const classBtn = 'block w-full text-white bg-blue-900 py-1 font-semibold mt-5 hover:opacity-80 duration-200 mb-2.5'

    return (
        <div className="register-container  w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 flex justify-center items-center">
            <div className="register-content w-3/4 bg-white bg-opacity-25 backdrop-blur-sm px-3 pt-4 pb-4 rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4">

                <h2 className="text-white font-semilbold text-2xl">Register</h2>

                {
                    msgError && <p className="text-center text-sm text-white p-2 mt-3 leading-4 rounded-md bg-red-600  shadow-lg shadow-gray-800 ">{msgError}</p>
                }

                <form 
                    className="mt-2"
                    onSubmit={handleRegister}
                 >
                    <input 
                        type="text"
                        placeholder='Name'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white  text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                        name='name'
                        onChange={handleInputChange}
                        value={name}
                    />

                    <input 
                        type="email"
                        placeholder='Email'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                        name='email'
                        onChange={handleInputChange}
                        value={email}
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                        name='password'
                        onChange={handleInputChange}
                        value={password}
                    />

                    <input 
                        type="password"
                        placeholder='Confirm Password'
                        className="w-full bg-transparent border-b pl-1 focus:outline-none mt-3 placeholder-white text-white focus:outline-0 focus:border-b-blue-800 duration-300 text-sm"
                        name='password2'
                        onChange={handleInputChange}
                        value={password2}
                    />

                    <input 
                        type="submit"
                        value="Register"
                        className={disabledBtn ? `cursor-not-allowed ${classBtn}` : `cursor-pointer ${classBtn}`}
                        disabled={disabledBtn}
                    />
                </form>

                <button 
                    className="text-white italic text-sm mt-4 hover:underline"
                    onClick={handleGoLogin}
                >Are you already registered?</button>
            </div>
        </div>
    )
}

export default Register
