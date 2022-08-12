import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UseForm from '../../Hooks/UseForm'
import UseProttectedPage from '../../Hooks/UseProttectedPage'
import { BASE_URL } from '../../constants/baseUrl'
import PagesHeader from '../../Components/PagesHeader/PagesHeader'
import axios from 'axios'
import {
    Main,
    ButtonStyled,
    MaterialInput,
    SignUpAddressForm
} from './style'
import { goToProfile } from '../../Router/coordinator'


const addressEdit = () => {
    UseProttectedPage()

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const [form, onChangeForm, cleanForm, setForm] = UseForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const getPreviousAddress = async() => {
        await axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setForm({
                "street": res.data.address.street,
                "number": res.data.address.number,
                "neighbourhood": res.data.address.neighbourhood,
                "city": res.data.address.city,
                "state": res.data.address.state,
                "complement": res.data.address.complement
            })
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

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
            cleanForm()
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getPreviousAddress()
    }, [])
    
    return (
    <>
        <PagesHeader title={"Editar endereço"} backPage />
        <Main>
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

            <ButtonStyled type="submit" onClick={() => goToProfile(navigate)}> Salvar </ButtonStyled>
        </SignUpAddressForm>

        </Main>
    </>
    )
}

export default addressEdit