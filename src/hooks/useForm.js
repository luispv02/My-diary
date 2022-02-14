import { useState } from 'react'

const useForm = (initialState = {}) => {
    
    const [inputValue, setInputValue] = useState(initialState);

    const reset = (newForm = initialState) => {
        setInputValue(newForm)
    }

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    return [inputValue, handleInputChange, reset]


}

export default useForm
