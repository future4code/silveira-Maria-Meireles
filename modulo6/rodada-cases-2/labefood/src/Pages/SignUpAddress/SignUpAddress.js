import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/baseUrl';
import { goToFeed } from '../../Router/coordinator';
import UseForm from '../../Hooks/UseForm';
import { SignUpAddressForm, MaterialInput, Main, ButtonStyled } from './style';

const SignUpAddress = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [form, onChangeForm, cleanForm] = UseForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const onSubmitAddressForm = (event) => {
        event.preventDefault()

        addNewAddress()
    }

    const addNewAddress = async() => {
        await axios.put(`${BASE_URL}/address`,form, {
            headers: {
                auth: token
            }
        })
        
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToFeed(navigate)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return (
    <Main>
        <p> Registre seu endereço </p>

        <SignUpAddressForm onSubmit = { onSubmitAddressForm }>
            <MaterialInput
                id = "outlined-basic"
                label = { "Logradouro" }
                name = "street"
                type = { "text" }
                placeholder = { "Rua / Av." }
                variant = { "outlined" }
                value = { form.street }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Número" }
                name = "number"
                type = { "number" }
                placeholder = { "Apto / bloco / casa" }
                variant = { "outlined" }
                value = { form.number }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Bairro" }
                name = "neighbourhood"
                type = { "text" }
                placeholder = { "Bairro" }
                variant = { "outlined" }
                value = { form.neighbourhood }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Cidade" }
                name = "city"
                type = { "text" }
                placeholder = { "Cidade" }
                variant = { "outlined" }
                value = { form.city }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Estado" }
                name = "state"
                type = { "text" }
                placeholder = { "Estado" }
                variant = { "outlined" }
                value = { form.state }
                onChange = { onChangeForm }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Complemento (opcional)" }
                name = "complement"
                type = { "text" }
                placeholder = { "Complemento (opcional)" }
                variant = { "outlined" }
                value = { form.complement }
                onChange = { onChangeForm }
                required
            />

            <ButtonStyled type="submit"> Salvar </ButtonStyled>
        </SignUpAddressForm>

    </Main>
    )
}

export default SignUpAddress;