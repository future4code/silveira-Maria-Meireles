import { useState } from "react"

const useForm = (initialState) => {
    const [form , setForm] = useState(initialState);

    const onChangeInputs = (event) => {
        const {name, value} = event.target;

        setForm({...form, [name]: value});
    }

    return (
        [form, onChangeInputs]
    );
};

export default useForm;