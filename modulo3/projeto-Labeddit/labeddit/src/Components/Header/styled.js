import styled from 'styled-components'

export const NavButton = styled.button`
    color: rgb(64, 136, 203);
    border: none;
    font-weight: bold;
    font-size: 18px;
    :hover{
        cursor: pointer;
    }
    :active{
        color: white;
    }
`

export const NavBar = styled.div`
background-color: #ededed;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px;
width: 100%;
height: 45px;
`

export const NavLogo = styled.img`
max-width: 100%;
max-height: 100%;
`