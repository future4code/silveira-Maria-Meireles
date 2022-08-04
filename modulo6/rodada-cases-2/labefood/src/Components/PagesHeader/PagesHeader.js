import React from 'react'
import { HeaderContainer, HeaderTitle } from './style'

const PagesHeader = ({title}) => {

    return (
      <HeaderContainer>
        <HeaderTitle> { title } </HeaderTitle>
      </HeaderContainer>

    )
}

export default PagesHeader;