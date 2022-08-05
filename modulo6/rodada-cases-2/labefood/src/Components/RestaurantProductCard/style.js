import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    width: 100%;
    margin: 0 0.5rem 0;
    display: flex;
    border: 1px solid gray;
    border-radius: 7px;
`

export const ProductImage = styled.img`
    width: 6rem;
    height: 7rem;
    border-radius: 7px 7px 0 0;
`

export const ProductQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px red;
    width: 2.063rem;
    height: 2.063rem;
`

export const ProductNameAndQuantityBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProductName = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: red;
    padding-bottom: 0.25rem;
`

export const ProductInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0 0 1rem;
    flex-grow: 1;

`

export const ProductDescription = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    padding: 0.25rem 0;
    color: gray;
    flex-grow: 1;
`

export const PriceAndButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProductPriceInfo = styled.p`

`

export const ProductInformButton = styled.button`
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    outline: 0;
    border: 1px solid black;
`