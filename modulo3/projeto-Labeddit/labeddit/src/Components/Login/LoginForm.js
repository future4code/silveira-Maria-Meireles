import React from 'react'
import useForm from '../../Hooks/useForm';
import { login } from '../../services/usersRequests';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [form, onChangeInputs] = useForm({email: "", password: ""});
    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, navigate);
    };

    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <input
                type='email'
                placeholder='E-mail'
                name={"email"}
                value={form.email}
                onChange={onChangeInputs}
                required
                />

                <input
                type='password'
                placeholder='Senha'
                name={"password"}
                value={form.password}
                onChange={onChangeInputs}
                required
                />

                <button
                type='submit'
                > 
                Entrar 
                </button>
            </form>
        </div>
    )
}

export default LoginForm;