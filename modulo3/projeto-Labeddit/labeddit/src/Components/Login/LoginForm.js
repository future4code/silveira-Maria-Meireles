import React from 'react'
import useForm from '../../Hooks/useForm';
import { login } from '../../services/usersRequests';
import { useNavigate } from 'react-router-dom';
import { FormContainer, Form, FormInputs, FormButtons } from './styled';

const LoginForm = () => {
    const [form, onChangeInputs, clearForm] = useForm({email: "", password: ""});
    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, navigate);
        clearForm();
    };

    return (
        <FormContainer>
            <Form onSubmit={onSubmitLogin}>
                <FormInputs
                type='email'
                placeholder='E-mail'
                name={"email"}
                value={form.email}
                onChange={onChangeInputs}
                required
                />

                <FormInputs
                type='password'
                placeholder='Senha'
                name={"password"}
                value={form.password}
                onChange={onChangeInputs}
                required
                />

                <FormButtons
                type='submit'
                > 
                Entrar 
                </FormButtons>
            </Form>
        </FormContainer>
    )
}

export default LoginForm;