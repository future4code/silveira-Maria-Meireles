import styled from 'styled-components'

export const RestaurantCardStyle = styled.div`
    width: 100%;
    border: 1px solid gray;
    border-radius: 12px;
    margin: 0.5rem 0;
`

export const RestaurantImage = styled.img`
    width: 100%;
    border-radius: 12px 12px 0 0;
    height: 7.5rem;
`

export const RestaurantName = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    padding: 2.5px 13.5px;
    color: red;
`

export const RestaurantExtraInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 14px;
`

export const RestaurantExtraInfo = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: lightgray;
`