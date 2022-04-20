import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { BASE_url, aluna } from '../../contants/urls';
import { ContainerSite } from '../../contants/GlobalTemplate';

const PaginaPerfis = (props) => {
    const [perfilParaEscolher, setPerfilParaEscolher] = useState('');

    const pegaPerfilParaMostrar = () => {
        axios.get(`${BASE_url}/person`)
        .then((res) => {
            setPerfilParaEscolher(res.data.profile);
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    const curtirPerfil = () => {
        const url = `${BASE_url}/choose-person`;
        const body = {
            id: perfilParaEscolher.id,
            choice: true
        };
        axios.post(url, body)
        .then((res) => {
            pegaPerfilParaMostrar();
            console.log(res)
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    useEffect(() => {
        pegaPerfilParaMostrar()
    }, []);

    return (
        <>
            <ContainerSite>
                <header>
                    <img src={''} alt={'Logo site'}/>
                    <img  onClick={props.vaiParaMatches} src={''} alt={'Icone chat'}/>
                </header>

                <main>
                    <img 
                    src={perfilParaEscolher.photo} 
                    alt={'Foto de perfil do usuário'}
                    />

                    <h2> {perfilParaEscolher.name} </h2>
                    <span> {perfilParaEscolher.age} </span>
                    <span> {perfilParaEscolher.bio} </span>
                </main>

                <footer>
                    <button onClick={pegaPerfilParaMostrar}> Num tô à fim </button>
                    <button onClick={curtirPerfil}> Ui, quero! </button>
                </footer>
            </ContainerSite>
        </>
    )
};

    export default PaginaPerfis;