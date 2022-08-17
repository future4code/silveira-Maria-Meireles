import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurantDetails } from '../../Router/coordinator'
import { RestaurantCardStyle, RestaurantExtraInfo, RestaurantExtraInfoBox, RestaurantImage, RestaurantName } from './style'

const RestaurantCard = ({restaurant}) => {

    const navigate = useNavigate()
    return (
        <RestaurantCardStyle onClick = { () => goToRestaurantDetails(navigate, restaurant.id) }>
           <RestaurantImage src={ restaurant.logoUrl }/>
           <RestaurantName> { restaurant.name } </RestaurantName>

            <RestaurantExtraInfoBox>
                <RestaurantExtraInfo> { restaurant.deliveryTime } - { Number(restaurant.deliveryTime) + 10 } min </RestaurantExtraInfo>
                <RestaurantExtraInfo> Frete R${ restaurant.shipping },00 </RestaurantExtraInfo>
            </RestaurantExtraInfoBox>
        </RestaurantCardStyle>
    )
}

export default RestaurantCard