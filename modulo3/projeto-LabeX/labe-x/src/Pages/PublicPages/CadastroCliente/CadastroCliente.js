import React from 'react';
import { useNavigate } from 'react-router-dom';
import useResgataViagens from '../../../Hooks/useResgataViagens'
import { voltarParaAnterior } from '../../../routes/coordinator';
import { selectPaises } from '../../../lists/paises';
import { useState } from 'react';
import axios from 'axios'
import { BASE_url } from '../../../constants/urls';

const CadastroCliente = () => {
    
    const navigate = useNavigate();
    const listaViagens = useResgataViagens();
    const [form, setForm] = useState(
        {
        name: '', 
        age: '', 
        applicationText: '',
        profession: '',
        country: '',
    });
    const [idViagem, setIdViagem] = useState('')

    const resgataId = (event) => {
        setIdViagem(event.target.value)
        console.log(idViagem)
    }

    const digitandoInputs = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const aoEnviarForm = (event) => {
        event.preventDefault();

        const url = `${BASE_url}/trips/${idViagem}/apply`

        axios.post(url, form)
        .then((res) => {
            console.log("Funcionou:", res.data)
            voltarParaAnterior(navigate);
        })
        .catch((err) => {
            console.log("Deu ruim:", err.message)
        })
    }
    
    return (
        <div>
            <h1> Inscrição </h1>

            <form onSubmit={aoEnviarForm}>
                <select
                name='idViagem'
                value={idViagem}
                onChange={resgataId}
                required
                >
                    <option> Selecionar </option>
                    {listaViagens.map((viagem) => {
                        return (
                            <option value={viagem.id}> {viagem.name} - {viagem.planet} </option>
                        )
                    })}; 
                </select>

                <input
                type="text"
                placeholder='Nome'
                name={'name'}
                value={form.name}
                onChange={digitandoInputs}
                pattern='^.{3,}'
                title="Seu nome deve ter no mínimo 3 letras."
                required
                />

                <input
                placeholder='Idade'
                name={'age'}
                value={form.age}
                onChange={digitandoInputs}
                pattern='^(1[89]|[2-9]\d)$'
                title="Você deve ter entre 18 e 99 anos."
                required
                />

                <input
                type='text'
                placeholder='Texto de inscrição'
                name={'applicationText'}
                value={form.applicationText}
                onChange={digitandoInputs}
                pattern='^.{30,}'
                title="Seu texto de inscrição deve ter no mínimo 30 caracteres."
                required
                />

                <input
                type='text'
                placeholder='Profissão'
                name={'profession'}
                value={form.profession}
                onChange={digitandoInputs}
                pattern='^.{4,}'
                title="Sua profissão precisa de no mínimo 4 letras."
                required
                />

                {selectPaises(form, digitandoInputs)}

                <button> Enviar </button>
            </form>
            <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
    )
};

export default CadastroCliente;
