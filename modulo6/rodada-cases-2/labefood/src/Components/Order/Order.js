import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    OrderContainer,
    ContainerSpace,
    StyledClock,
    LeftInfoBox,
    OrderTitle,
    RestaurantName,
    TotalPrice
} from './style'

const Order = ({ totalPrice, restaurantName }) => {

    const navigate = useNavigate()

    return (
       <>
            <OrderContainer>
                <StyledClock src={"../../assets/clock.png"}/>
                <LeftInfoBox>
                    <OrderTitle> Pedido em andamento </OrderTitle>
                    <RestaurantName> {restaurantName} </RestaurantName>
                    <TotalPrice> Subtotal R${totalPrice} </TotalPrice> 
                </LeftInfoBox>
            </OrderContainer>
            <ContainerSpace/>
        </>
    )
}

export default Order;