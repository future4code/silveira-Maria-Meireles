import styled from 'styled-components'

export const OrderContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.375rem;
    position: fixed;
    bottom: 3.062rem;
    width: 100vw;
    background-color: red;
    z-index: 1;
    padding: 0 0 0 2rem;
`

export const ContainerSpace = styled.div`
    height: 7.375rem;
`

export const StyledClock = styled.img`
    width: 26px;
`

export const LeftInfoBox = styled.div`

`

export const OrderTitle = styled.p`
    font-family: Montserrat;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #fff;
    padding: 0.25rem;
`

export const RestaurantName = styled.p`
    font-family: Montserrat;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #000;
    padding: 0.25rem;
`

export const TotalPrice = styled.p`
    font-family: Montserrat;
    font-size: 1rem;
    letter-spacing: -0.39px;
    padding: 0.25rem;
`