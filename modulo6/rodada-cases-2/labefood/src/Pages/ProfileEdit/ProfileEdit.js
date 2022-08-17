import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PagesHeader from '../../Components/PagesHeader/PagesHeader'
import BottomMenu from '../../Components/BottomMenu/BottomMenu'
import {AlterUserForm, Main, MaterialInput, ButtonStyled } from './style';
import {BASE_URL} from '../../constants/baseUrl'
import { goToProfile } from '../../Router/coordinator'
import UseProttectedPage from '../../Hooks/UseProttectedPage'

const ProfileEdit = () => {
    UseProttectedPage()

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")

    const showPreviousProfileInfo = async() => {
        await axios.get(`${BASE_URL}/profile`,{ 
            headers: {
                auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setName(res.data.user.name)
                setEmail(res.data.user.email)
                setCpf(res.data.user.cpf)
            })
            .catch((error) => {
                console.log(error.message)
            }) 
    }
    
    const cpfMask = (cpf) => {
        return cpf
        .replace(/\D/g, "")
        .replace(/(\d{3}) (\d)/, "$1.$2")
        .replace(/(\d{3}) (\d)/, "$1.$2")
        .replace(/(\d{3}) (\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")

    }

    const updateProfile = async() => {
        const body = {
            name,
            email,
            cpf
        }
        await axios.put(`${BASE_URL}/profile`, body,{
            headers:{
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        updateProfile()
        goToProfile(navigate)
    }


    useEffect(() => {
        showPreviousProfileInfo()
    }, [])

    return (
        <Main>
        <PagesHeader title={"Editar dados pessoais"} backPage/> 

        <AlterUserForm onSubmit = { onSubmitForm }>

            <MaterialInput
                id = "outlined-basic"
                label = { "Nome" }
                name = "name"
                type = { "text" }
                placeholder = { "Digite seu nome" }
                variant = { "outlined" }
                value = { name }
                onChange = { (event) => setName(event.target.value) }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "Email" }
                name = "email"
                type = { "email" }
                placeholder = { "Digite seu e-mail" }
                variant = { "outlined" }
                value = { email }
                onChange = { (event) => setEmail(event.target.value) }
                required
            />

            <MaterialInput
                id = "outlined-basic"
                label = { "CPF" }
                name = "cpf"
                type = { "text" }
                placeholder = { "Digite seu CPF" }
                variant = { "outlined" }
                value = { cpfMask(cpf) } 
                onChange = { (event) => setCpf(event.target.value) }
                required
            />

            <ButtonStyled type="submit"> Atualizar </ButtonStyled>
        </AlterUserForm>

        <BottomMenu />
    </Main>
    )
}

export default ProfileEdit;