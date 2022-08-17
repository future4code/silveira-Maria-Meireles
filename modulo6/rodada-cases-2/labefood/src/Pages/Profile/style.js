import styled from 'styled-components'

export const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const PersonalProfile = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: Roboto;
    }

    div:nth-child(2) {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: Roboto;
        cursor: pointer;
    }
`

export const PersonalAddress = styled.div`
    height: 10%;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    div:nth-child(2) {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }
`

export const PurchasesRegister = styled.div`
    height: 70%;
    font-family: Roboto;
    margin: auto;
    font-size: 1.2rem;
` 