import React from 'react'
import LogoHeader from '../../assets/LogoHeader.png'
import { useNavigate } from 'react-router'
import { goToLogin } from '../../routes/coordinator';
import { HeaderContainer, HeadersLogo } from './style';

const Header = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

    return (
        <HeaderContainer>
            <HeadersLogo src={LogoHeader} />
            <button onClick={logOut}> Logout </button>
        </HeaderContainer>
    )
} 
export default Header;