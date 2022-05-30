import React from 'react'
import useForm from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/usersRequests'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [form, onChangeForm, clearFields] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, navigate)
        clearFields()
    }

    return (
        <div>
             <form onSubmit={onSubmitForm}>
                <input
                type='text'
                placeholder='Nome de usuário'
                name={'username'}
                value={form.username}
                onChange={onChangeForm}
                required
                />

                <input
                type='email'
                placeholder='E-mail'
                name={'email'}
                value={form.email}
                onChange={onChangeForm}
                required
                />

                <input
                type='password'
                placeholder='Senha'
                name={'password'}
                value={form.password}
                onChange={onChangeForm}
                required
                />

                <button> Cadastrar </button> 
            </form>
        </div>
    )
}

export default RegisterForm;