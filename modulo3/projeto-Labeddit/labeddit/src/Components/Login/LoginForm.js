import React from 'react'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/usersRequests';

const LoginForm = () => {
    const navigate = useNavigate()
    const [form, onChangeForm, clearFields] = useForm({email: '', password: ''});

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, navigate)
        clearFields()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input
                type='email'
                name={'email'}
                value={form.email}
                onChange={onChangeForm}
                required
                />

                <input
                type='password'
                name={'password'}
                value={form.password}
                onChange={onChangeForm}
                required
                />

                <button> Entrar </button>
            </form>
        </div>
    )
}
export default LoginForm;