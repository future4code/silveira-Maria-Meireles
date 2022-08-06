import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const MainCart = styled.div`
    display: flex;
    height: 5%;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

export const CartConfig = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 95%;
`

export const ProfileInfo = styled.div`
    height: 10%;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-top: 8px;
    width: 100%;
`

export const InfoRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    margin-top: 10px;
    p:nth-child(1){
        color: red;
    }
`

export const CartInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const EmptyCart = styled.p`
    font-size: 2rem;
    font-family: Roboto;
    letter-spacing: -0.39px;
    text-align: center;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    p, label{
        font-size: 1.2rem;
    }
`

export const Freight = styled.p`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;

    p:nth-child(2){
        color: red;
        font-size: 1.5rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    div{
        margin: 5px;
    }
    label {
        font-size: 1rem;
        text-transform: uppercase;
        font-family: Roboto;
        letter-spacing: -0.39px;
    }
    input {
        height: 20px;
        width: 20%;
    }
`