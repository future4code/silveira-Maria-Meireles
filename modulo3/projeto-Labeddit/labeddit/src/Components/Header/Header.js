import React from 'react'
import { goToLogin } from '../../routes/coordinator'
import labelogo from '../../assets/labelogol.jpg'
import {useNavigate} from 'react-router-dom'

const Header = () => {
const navigate = useNavigate()
    return (
        <div>
            <img src={labelogo} alt={'logo do header'} />
            <button onClick={() => goToLogin(navigate)}> Login </button>
        </div>
    )
}

export default Header