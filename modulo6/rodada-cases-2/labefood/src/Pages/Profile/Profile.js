import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomMenu from '../../Components/BottomMenu/BottomMenu'
import PagesHeader from '../../Components/PagesHeader/PagesHeader'
import UseRequestData from '../../Hooks/UseRequestData'
import UseProttectedPage from '../../Hooks/UseProttectedPage'
import { BASE_URL } from '../../constants/baseUrl'
import { goToProfileEdit, goToAddressEdit } from '../../Router/coordinator'
import {
    Main,
    ProfileInfo,
    PersonalProfile,
    PersonalAddress,
    PurchasesRegister
} from './style'
import CardOrderHistory from '../../Components/CardOrderHistory/CardOrderHistory'

const Profile = () => {
    UseProttectedPage()

    const navigate = useNavigate()
    const person = UseRequestData({}, `${BASE_URL}/profile`)
    const orderHistory = UseRequestData([], `${BASE_URL}/orders/history`)

    return (
    <>
    <PagesHeader title={"Editar perfil"} backPage logout/>
    <Main>
        <ProfileInfo>
            <PersonalProfile>
                <p> { person[0].user && person[0].user.name } </p>
                <p> { person[0].user && person[0].user.email } </p>
                <p> { person[0].user && person[0].user.cpf } </p> 

                <div onClick={() => goToProfileEdit(navigate)}> Editar </div>
            </PersonalProfile>

            <PersonalAddress>
                <h5> Endereço cadastrado </h5>
                <p> { person[0].user && person[0].user.address } </p> 

                <div onClick={() => goToAddressEdit(navigate)}> Editar </div>
            </PersonalAddress>

            <hr/>
            <PurchasesRegister> 
                Histórico de compras 
            </PurchasesRegister> 

            {orderHistory[0].orders && orderHistory[0].orders.length > 0 ?
            orderHistory[0].orders && orderHistory[0].orders.map((order) => {
                return <CardOrderHistory order={order}/>
            }): <p> Você não realizou nenhum pedido. :( </p> }
        </ProfileInfo>

       <BottomMenu page={"profile"} />
    </Main> 
    </>
    )
}

export default Profile;