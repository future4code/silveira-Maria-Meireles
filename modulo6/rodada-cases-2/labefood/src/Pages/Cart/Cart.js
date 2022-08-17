import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'
import PagesHeader from '../../Components/PagesHeader/PagesHeader'
import useRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../constants/baseUrl'
import BottomMenu from '../../Components/BottomMenu/BottomMenu'
import RestaurantProductCard from '../../Components/RestaurantProductCard/RestaurantProductCard'
import { useGlobal } from '../../GlobalState/GlobalStateContext'
import { Button } from "@mui/material" 
import {
    Main,
    CartConfig,
    ProfileInfo,
    InfoRestaurant,
    CartInfo,
    EmptyCart,
    Payment,
    Freight,
    Total,
    Form,
    ButtonStyled,
    PaymentMethodStyle
} from './style'
import { Key } from '@mui/icons-material'
import UseProttectedPage from '../../Hooks/UseProttectedPage'
import { goToFeed } from '../../Router/coordinator'


const Cart = () => {
    UseProttectedPage()
    
    const navigate = useNavigate()
    const clientInfo = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState("")
    const [fullPrice, setFullPrice] = useState(0)

    const {states, setters} = useGlobal()
    const {cart, restaurant} = states
    const {setOrder, setCart} = setters

    const [paymentMethod] = useState([
        'money',
        'creditcard'
    ])


    const onChangePaymentMethod = (event) => {
        setPayment(event.target.value) 
    }

    const totalPrice = () => {
        let totalPrice = 0;

        if(restaurant && restaurant.shipping) {
            for(const product of cart) {
                totalPrice += product.price * product.quantity
            }
            setFullPrice(totalPrice)
        }
    }

    const placeOrder = async() => {
        const body = {
            products: cart.map((product) => {
                return ({
                    id: product.id,
                    quantity: product.quantity
                })
            }),
            paymentMethod: payment
        }

            await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setOrder(res.data.order)
                setCart([])
                goToFeed(navigate)
            })
            .catch((error) => {
                console.log(error.response)
                alert(error.response)
            })
    }

    const onSubmitPlaceOrder = (event) => {
        event.preventDefault()
        placeOrder()
    }

    useEffect(() => {
        totalPrice()
    }, [])


    return (
    <Main>
        <PagesHeader title={"Carrinho"} backPage logout/>

        <CartConfig>
            <ProfileInfo>
                <p> Endereço de entrega </p>
                <p> {clientInfo[0].user && clientInfo[0].user.address} </p>
            </ProfileInfo>

            <InfoRestaurant>
                <p> {restaurant.name} </p>
                <p> {restaurant.address} </p>
                <p> {restaurant.deliveryTime ? restaurant.deliveryTime: ""} - {restaurant.deliveryTime ? Number(restaurant.deliveryTime) + 10: ""} </p> 
            </InfoRestaurant>

            <CartInfo>
                { 
                cart && cart.length > 0 ? cart.map((product) => {
                    return (
                        <RestaurantProductCard
                        key={product.id}
                        product={product}
                        restaurant={restaurant}
                        />
                    )
                }) : <EmptyCart> Carrinho vazio </EmptyCart> 
            }
            </CartInfo>

            <Payment>
                <Freight> Frete {restaurant.shipping? new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(restaurant.shipping) : "R$ 00,00"
                }
                </Freight>

                <Total>
                    <p> Subtotal </p>
                    <p> {fullPrice ? new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(fullPrice) : "R$ 00,00"
                } </p>
                </Total>

                <PaymentMethodStyle> Forma de pagamento </PaymentMethodStyle>
                <Form onSubmit={onSubmitPlaceOrder}>
                    {
                       paymentMethod && paymentMethod.map((key) => {
                            return(
                                <div key={key}>
                                    <input
                                    checked={payment === key}
                                    name={'paymentMethod'}
                                    id={Key}
                                    type={"radio"}
                                    onChange={onChangePaymentMethod}
                                    value={key}
                                    />
                                    <label htmlFor={key}> {key} </label>
                                </div>
                            ) 
                        })
                    }
                    <ButtonStyled type="submit"> Confirmar compra </ButtonStyled> 
                </Form>
            </Payment>
        </CartConfig>

        <BottomMenu page={"cart"} />
    </Main>
    )
}

export default Cart;