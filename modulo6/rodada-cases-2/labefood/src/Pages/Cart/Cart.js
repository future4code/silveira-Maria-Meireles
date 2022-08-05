import React, { useState } from 'react'
import PagesHeader from '../../Components/PagesHeader/PagesHeader'
import useRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../constants/baseUrl'
import {
    CartContainer,
    CartTitleContainer,
    CartInfoContainer,
    ClientProfileInfo
} from './style'


const Cart = () => {
    
    const clientInfo = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState({})

    const [paymentMethod, setPaymentMethod] = useState({
        "money": false,
        "creditCard": false
    })

    const onChangePaymentMethod = (event) => {
        const newCheck = {...paymentMethod}

        newCheck[event.target.value] = event.target.value

        const result = Object.keys(newCheck).filter((pay) => {
            if(newCheck[pay]) {
                return [pay, ...payment]
            }
        })
        setPayment(result)
        setPaymentMethod(newCheck)
    }

    return (
    <CartContainer>
        <PagesHeader title={"Carrinho"} backPage={true}/>
        <CartTitleContainer>
            <p> Carrinho </p>
        </CartTitleContainer>

        <CartInfoContainer>
            <ClientProfileInfo>
                <p> Endereço de entrega </p>
                <p> {clientInfo[0].user && clientInfo[0].user.address} </p>
            </ClientProfileInfo>

            <div>
                <p> Carrinho vazio </p> 
            </div>

            <div>
                <p> Frete: 0800 </p> 
                <div>
                    <p> Subtotal: Tudo free </p>
                    <p>  Total: Agora é free </p>
                </div>

                <form>
                    <label> Dinheiro </label>
                    <input
                    type={"checkbox"}
                    id={"zummm"}
                    name={'aaaaaa'}
                    value={"PAÇOCA"}
                    />

                    <label> Cartão de crédito </label>
                    <input
                    type={"checkbox"}
                    id={"zummm"}
                    name={'aaaaaa'}
                    value={"PAÇOCA"}
                    />
                    <button> Confirmar </button> 
                </form>
            </div>
        </CartInfoContainer>
    </CartContainer> 
    )
}

export default Cart;