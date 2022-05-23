import React from 'react';
import { voltarParaAnterior } from '../../../routes/coordinator';
import { listaPlanetas } from '../../../lists/planetas';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BASE_url } from '../../../constants/urls';
import axios from 'axios';

const CadastroViagens = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState(
      {
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
      }
    )

    const digitandoInputs = (event) => {
      const {name, value} = event.target
      setForm({...form, [name]: value})
    }

    const cadastraNovaViagem = (event) => {
      event.preventDefault();

      const url = `${BASE_url}/trips`;
      const token = localStorage.getItem('token');
        axios.post(url, form, {headers: {
          auth: token
        }})
        .then((res) => {
          console.log("deu certo:", res.data)
          voltarParaAnterior(navigate);
        })
        .catch((err) => {
          alert(err.message)
        })
    }
    return (
      <div>
        <h1> Cadastre sua viagem </h1>
        <div>
          <form onSubmit={cadastraNovaViagem}>
            <input
              type="text"
              placeholder="Nome"
              name={"name"}
              value={form.name}
              onChange={digitandoInputs}
              pattern='^.{5,}'
              title="O nome da sua viagem deve ter ao menos 5 letras."
              required
            />

            {listaPlanetas(form, digitandoInputs)}

            <input
            type='date'
            name={"date"} 
            value={form.date} 
            onChange={digitandoInputs} 
            min={'2023/01/01'}
            title=''
            required
            />

            <input
              placeholder="Descrição"
              name={"description"}
              value={form.description}
              onChange={digitandoInputs}
              pattern='^.{30,}'
              title="A Descrição deve ter no mínimo 30 caracteres."
              required
            />

            <input
              type="number"
              placeholder="Duração em dias"
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={digitandoInputs}
              min={'50'}
              required
            />

            <button > Criar </button>
          </form>
          <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
      </div>
    );
};

export default CadastroViagens;