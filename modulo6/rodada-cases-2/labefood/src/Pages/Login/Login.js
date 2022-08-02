import React, { useState } from 'react'
import { Main, loginForm, ButtonStyled, DivPassword, MaterialInput } from './style'
import { IconButton } from '@mui/material'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("")

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        console.log(email, password)
    }

    return (
        <Main>
            <p> Entrar </p>
 
            <loginForm onSubmit={ onSubmitLogin }>
                <MaterialInput
                id="outlined-basic" 
                label="Email" 
                type= { "email" }
                variant="outlined" 
                placeholder="email@email.com"
                value= { email } 
                onChange= {(event) => {
                    setEmail(event.target.value)
                }}
                />
                
                <DivPassword>
                    <MaterialInput
                    id="filled-basic" 
                    label="Password"
                    type={ showPassword? "password" : "text" } 
                    variant= "filled" 
                    placeholder="Mínimo de 6 caracteres"
                    value= { password }
                    onChange= {(event) => {
                        setPassword(event.target.value)
                    }}
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
            </loginForm>
        </Main>
    )
}

export default Login;