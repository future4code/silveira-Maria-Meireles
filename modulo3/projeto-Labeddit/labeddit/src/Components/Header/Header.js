import React from 'react'
import LogoHeader from '../../assets/LogoHeader.png'
import { useNavigate } from 'react-router'
import { goToLogin } from '../../routes/coordinator';
import { HeaderButton, HeaderContainer, HeadersLogo } from './style';

const Header = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

    return (
        <HeaderContainer>
            <HeadersLogo src={LogoHeader} />
            <HeaderButton onClick={logOut}> Logout </HeaderButton>
        </HeaderContainer>
    )
} 
export default Header;