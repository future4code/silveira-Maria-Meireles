import { useState } from 'react'

const UseForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const onChangeForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const cleanForm = () => {
        setForm(initialState)
    }

    return [form, onChangeForm, cleanForm]
}

export default UseForm;