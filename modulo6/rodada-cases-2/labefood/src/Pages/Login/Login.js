import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { Main, LoginForm, ButtonStyled, DivPassword, MaterialInput } from './style'
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { goToFeed } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [emailErr, setEmailErr] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [checkEmailErr, setCheckEmailErr] = useState("")
    const [checkPassErr, setCheckPassErr] = useState("")

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const userLogin = {
            email,
            password
        }
        loginApi(userLogin)
    }

     const loginApi = async(body) => {
        await axios.post(`${BASE_URL}/login`,body)
        .then((res) => {
            setEmailErr("")
            setCheckEmailErr(false)
            setPasswordError("")
            setCheckPassErr(false)
            localStorage.setItem('token', res.data.token)
            alert(`Boas-vindas, ${res.data.user.name}!`)
            goToFeed(navigate)
        })
        .catch((error) => {
            if(error.response.data.message.includes("Senha incorreta")) {
                setPasswordError(error.response.data.message)
                setCheckPassErr(true)

            } else {
                setEmailErr(error.response.data.message)
                setCheckEmailErr(true)
            }

            console.log(error.message)
        })
    }

    return (
        <Main>
            <p> Entrar </p>
 
            <LoginForm onSubmit={ onSubmitLogin }>
                <MaterialInput
                error = {checkEmailErr}
                helperText = {checkEmailErr ? emailErr : ""}
                id="outlined-basic" 
                label="Email" 
                type= { "email" }
                variant="outlined" 
                placeholder="email@email.com"
                value= { email } 
                onChange= {(event) => {
                    setEmail(event.target.value)
                }}
                required
                />
                
                <DivPassword>
                    <MaterialInput
                    error= { checkPassErr }
                    helperText = { checkPassErr ? passwordError : " " }
                    id="filled-basic" 
                    label="Password"
                    type={ showPassword? "password" : "text" } 
                    variant= "filled" 
                    placeholder="Mínimo de 6 caracteres"
                    value= { password }
                    onChange= {(event) => {
                        setPassword(event.target.value)
                    }}
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

                <ButtonStyled type="submit"> Entrar </ButtonStyled>
            </LoginForm>
        </Main>
    )
}

export default Login;