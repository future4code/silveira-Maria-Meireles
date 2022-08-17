import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIosNew } from '@mui/icons-material'
import { HeaderContainer, HeaderTitle } from './style'
import { goToPreviousPage } from '../../Router/coordinator'
import LogoutIcon from '@mui/icons-material/Logout';
import { goToLogin } from '../../Router/coordinator'

const PagesHeader = ({title, backPage, logout}) => {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
     goToLogin(navigate)
  }
    return (
      <HeaderContainer>
        {backPage && <ArrowBackIosNew onClick={() => {goToPreviousPage(navigate)}} />}
        <HeaderTitle> { title } </HeaderTitle>
        {logout && <LogoutIcon onClick={() => {logOut()}} />}
      </HeaderContainer>

    )
}

export default PagesHeader;