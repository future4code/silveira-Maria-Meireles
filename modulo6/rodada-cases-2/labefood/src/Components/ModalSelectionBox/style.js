import styled from 'styled-components'

export const ModalBox = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 0 1rem;
    margin: 60% 1rem 50% 1rem;
`

export const ModalTitle = styled.h3`
    font-family: Roboto;
    color: gray;
    margin: 1rem 0;
    text-align: center;
    letter-spacing: -0.39px;
`

export const SelectQuantityInput = styled.select`
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid gray;
    margin: 1rem 0;
`

export const AddToCartButton = styled.button`
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: right;
    color: #4f81a8;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-transform: uppercase;
    margin: 1rem 0;
    align-self: flex-end;
`