import React from 'react';
import { vaiParaLogin, vaiParaViagens } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const PaginaHome = () => {

    const navigate = useNavigate();

    return (
        <div>
            <img src={""} alt={""}/>

            <div>
                <button onClick = {() => vaiParaLogin(navigate)}> Login </button>
                <button onClick={() => vaiParaViagens(navigate)}> Ver Viagens </button>
            </div>
        </div>
    )
};

export default PaginaHome;