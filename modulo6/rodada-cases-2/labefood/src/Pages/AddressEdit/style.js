import styled from 'styled-components'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'


export const ButtonStyled = styled(Button)`
   &&{
    background-color: #E8222E;
    color: #000000;
    width: 100%;
    padding: 8px;
   }
`

export const Main = styled.div`
    padding: 10px;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p{
        font-size: 2rem;
    }
`

export const SignUpAddressForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 30%;
    width: 90%;
    justify-content: space-evenly;
` 

export const MaterialInput = styled(TextField)`
    &&{ 
    width: 100%;
    }
`