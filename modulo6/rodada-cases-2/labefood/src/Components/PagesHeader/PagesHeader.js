import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIosNew } from '@mui/icons-material'
import { HeaderContainer, HeaderTitle } from './style'
import { goToPreviousPage } from '../../Router/coordinator'

const PagesHeader = ({title, backPage}) => {
  const navigate = useNavigate()
    return (
      <HeaderContainer>
        {backPage && <ArrowBackIosNew onClick={() => {goToPreviousPage(navigate)}} />}
        <HeaderTitle> { title } </HeaderTitle>
      </HeaderContainer>

    )
}

export default PagesHeader;