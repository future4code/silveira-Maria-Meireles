import React, {useState, useEffect} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    const clearFields = () => {
        setForm(initialState)
    } 

    return (
        [form, onChangeForm, clearFields]
    )
}

export default useForm;