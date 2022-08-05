import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurantDetails } from '../../Router/coordinator'
import { RestaurantDetailCardStyle, RestaurantExtraInfo, RestaurantExtraInfoBox, RestaurantImage, RestaurantName } from './style'

const RestaurantDetailsCard = ({restaurant}) => {

    const navigate = useNavigate()
    return (
        <RestaurantDetailCardStyle onClick = { () => goToRestaurantDetails(navigate, restaurant.id) }>
           <RestaurantImage src={ restaurant.logoUrl }/>
           <RestaurantName> { restaurant.name } </RestaurantName>
           <RestaurantExtraInfo> { restaurant.category } </RestaurantExtraInfo>

            <RestaurantExtraInfoBox>
                <RestaurantExtraInfo> { restaurant.deliveryTime } - { Number(restaurant.deliveryTime) + 10 } min </RestaurantExtraInfo>
                <RestaurantExtraInfo> Frete R${ restaurant.shipping },00 </RestaurantExtraInfo>
                <RestaurantExtraInfo>  { restaurant.address } </RestaurantExtraInfo> 
            </RestaurantExtraInfoBox>
        </RestaurantDetailCardStyle>
    )
}

export default RestaurantDetailsCard