import styled from 'styled-components'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { ReactComponent as Home} from '../../assets/Labefood.svg'

export const Main = styled.div`
    padding: 10px;
    max-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        font-size: 2rem;
    }
`

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 90%;
    justify-content: space-evenly;
` 

export const ButtonStyled = styled(Button)`
   &&{
    background-color: #E8222E;
    color: #000000;
    width: 100%;
    padding: 12px;
    margin-top: 10px;
   }
`

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MaterialInput = styled(TextField)`
    &&{ 
    width: 100%;
    }
`

export const StyledHome = styled(Home)`
    margin: auto;
    width: 280px;
    height: 300px;
`