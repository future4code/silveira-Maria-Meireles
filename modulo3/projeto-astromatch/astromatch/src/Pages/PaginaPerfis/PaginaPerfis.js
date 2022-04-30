import React, {useState, useEffect} from 'react'
import axios from 'axios';
import logo from '../../assets/logo.png'
import chat from '../../assets/chat.png'
import Xa from '../../assets/x.png'
import coracao from '../../assets/coracao.png'
import { BASE_url} from '../../contants/urls';
import { ContainerSite } from '../../contants/GlobalTemplate';
import { FotoPerfil, ContainerPerfil, ContainerHeader, Logo, Chat, BotaoUm, Botaodois, ContainerBotoes} from './style';
import BotaoLimpar from '../../Components/BotaoLimpar';


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
                <ContainerHeader>
                        <Logo src={logo} alt={'Logo site'}/>
                        <Chat onClick={props.vaiParaMatches} src={chat} alt={'Icone chat'}/>
                </ContainerHeader>

                <main>
                    <ContainerPerfil>
                        <FotoPerfil
                        src={perfilParaEscolher.photo} 
                        alt={'Foto de perfil do usuário'}
                        />

                        <h2> {perfilParaEscolher.name}, {perfilParaEscolher.age} </h2>
                        <span> {perfilParaEscolher.bio} </span>
                    </ContainerPerfil>
                </main>

                <section>
                    <ContainerBotoes>
                        <BotaoUm ClassName="BotaoX" onClick={pegaPerfilParaMostrar}> <img src={Xa} /> </BotaoUm>
                        <Botaodois ClassName="BotaoH" onClick={curtirPerfil}> <img src={coracao}/> </Botaodois>
                    </ContainerBotoes>
                </section>
                  
            </ContainerSite>
        </>
    )
};

    export default PaginaPerfis;