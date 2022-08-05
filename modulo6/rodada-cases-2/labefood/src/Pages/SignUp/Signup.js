import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UseForm from '../../Hooks/UseForm';
import { DivPassword, Main, MaterialInput, ButtonStyled, SignUpForm } from './style';
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { BASE_URL } from '../../constants/baseUrl';
import { gotoSignUpAddress } from '../../Router/coordinator';
import PagesHeader from '../../Components/PagesHeader/PagesHeader'

const SignUp = () => {

    const navigate = useNavigate()
    const [form, onChangeForm, cleanForm] = UseForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
    const [checkPasswordError, setPasswordError] = useState(false)
    
    const cpfMask = (value) => {
        return value 
        .replace(/\D/g, "")
        .replace(/(\d{3}) (\d)/, "$1.$2")
        .replace(/(\d{3}) (\d)/, "$1.$2")
        .replace(/(\d{3}) (\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowPasswordonfirm = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        if(form.password !== passwordConfirm) {
            setPasswordError(true)
        }
        else if(form.password === passwordConfirm) {
            setPasswordError(false)
            registerNewUser()
        }
    }

    const onChangePasswordConfirmation = (event) => {
        setPasswordConfirm(event.target.value)
    }

    const registerNewUser = async() => {
        await axios.post(`${BASE_URL}/signup`,form)

        .then((res) => {
            localStorage.setItem('token', res.data.token)
            
            alert(`Boas vindas, ${res.data.user.name}! O último passo para utilizar o nosso app será registrar o seu endereço: :)`)
            gotoSignUpAddress(navigate)
        })
        .catch((error) => {
          
            alert(error.response.data.message)
            cleanForm()
            setPasswordConfirm('')
        })
    }

    return (
    <Main>
        <PagesHeader backPage/>
        <p> Cadastre-se </p> 

        <SignUpForm onSubmit = { onSubmitForm }>

            <MaterialInput
                id = "outlined-basic"
                label = { "Nome" }
                name = "name"
                type = { "text" }
                placeholder = { "Digite seu nome" }
                variant = { "outlined" }
                value = { form.name }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Email" }
                name = "email"
                type = { "email" }
                placeholder = { "Digite seu e-mail" }
                variant = { "outlined" }
                value = { form.email }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "CPF" }
                name = "cpf"
                type = { "text" }
                placeholder = { "Digite seu CPF" }
                variant = { "outlined" }
                value = { cpfMask(form.cpf) } 
                onChange = { onChangeForm }
                required
            />

            <DivPassword>
                <MaterialInput
                    id="filled-basic" 
                    label="Senha"
                    name = "password"
                    type={ showPassword? "password" : "text" } 
                    variant= "filled" 
                    placeholder="Mínimo de 6 caracteres"
                    value= { form.password }
                    onChange= { onChangeForm }
                    inputProps= {{minLength: 6, title: "A senha deve conter no minímo 6 caracteres."}}
                    required
                />

                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </DivPassword>

            <DivPassword>
                <MaterialInput
                    error = { checkPasswordError }
                    helperText = { checkPasswordError ? "As senhas não coincidem." : ""}
                    id="filled-basic" 
                    label="Confirmar senha"
                    type={ showPasswordConfirmation? "password" : "text" } 
                    variant= "filled" 
                    placeholder="Mínimo de 6 caracteres"
                    value= { passwordConfirm }
                    onChange= { onChangePasswordConfirmation }
                    inputProps= {{minLength: 6, title: "A senha deve conter no minímo 6 caracteres."}}
                    required
                />

                <IconButton
                    aria-label="toggle password visibility"
                    onClick={ handleShowPasswordonfirm }
                    edge="end"
                >
                    {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </DivPassword>

            <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
        </SignUpForm>
    </Main>
    )
}

export default SignUp;