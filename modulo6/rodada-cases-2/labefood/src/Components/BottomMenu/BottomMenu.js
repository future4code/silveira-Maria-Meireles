import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    goToFeed,
    goToCart,
    goToProfile
} from '../../Router/coordinator'

import {
    MenuContainer,
    ContainerSpace,
    StyledAvatar,
    StyledHome,
    SytyledShoppingCart
} from './style'

const BottomMenu = ({ page }) => {

    const navigate = useNavigate()

    return (
       <>
            <MenuContainer>
                <StyledHome currentPage={page === "home"} onClick={() => goToFeed(navigate)}/>
                <SytyledShoppingCart currentPage={page === "cart"} onClick={() => goToCart(navigate)}/>
                <StyledAvatar currentPage={page === "profile"} onClick={() => goToProfile(navigate)}/>
            </MenuContainer>
            <ContainerSpace/>
        </>
    )
}

export default BottomMenu;