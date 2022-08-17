import React from 'react'
import {
    Main
} from './style'

const CardOrderHistory = ({ order }) => {

    const dateConvert = (timeStamp) => {
        let time = new Date(timeStamp)
        let day = time.getDate().toString().padStart(2, '0')
        let month = (time.getMonth() +1).toString().padStart(2, '0')
        let year = time.getFullYear()

        return `${day}/ ${month} / ${year}`
    }
    return(
        <Main>
            <p> {order.restaurantName} </p>
            <p> {dateConvert(order.createdAt)} </p>
            <p> Subtotal: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(order.totalPrice)}
            </p>
        </Main> 
    )
}

export default CardOrderHistory;