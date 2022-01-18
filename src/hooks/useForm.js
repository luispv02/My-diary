import { useState } from 'react'

const useForm = (initialState = {}) => {
    
    const [inputValue, setnputValue] = useState(initialState);

    const handleInputChange = (e) => {
        setnputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    return [inputValue, handleInputChange]


}

export default useForm
