import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { register } from '../../services/usersRequests';

const RegisterForm = () => {
    const [form, onChangeInputs, clearForm] = useForm({username: "", email: "", password: ""});
    const navigate = useNavigate();

    const onSubmitRegister = (event) => {
        event.preventDefault();
        register(form, navigate);
        clearForm()
    };

    return (
        <div>
            <h1> Olá, boas vindas ao LabEddit! ;) </h1> 

            <form onSubmit={onSubmitRegister}>
                <input
                type='text'
                placeholder='Nome de usuário'
                name={"username"}
                value={form.username}
                onChange={onChangeInputs}
                required
                />

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
                <button type='submit'> Cadastrar </button> 
            </form>

            <div>
                <p> Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade </p>
                <input type='checkbox' id="opcao"/>
                <label for='opcao'>
                    Eu concordo em receber E-mails sobre coisas legais no LabEddit.
                </label>
            </div>
        </div>
    )
}

export default RegisterForm;