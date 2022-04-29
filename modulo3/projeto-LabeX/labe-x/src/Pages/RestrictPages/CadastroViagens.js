import React from 'react';
import { voltarParaAnterior } from '../../routes/coordinator';
import { listaPlanetas } from '../../lists/planetas';
import { useNavigate } from 'react-router-dom';

const CadastroViagens = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1> Cadastre sua viagem </h1>

        <div>
          <form>
            <input
              type="text"
              placeholder="Nome"
              name={""}
              value={""}
              onChange={""}
              required
            />

            <input
              type="text"
              placeholder="Idade"
              name={""}
              value={""}
              onChange={""}
              required
            />

            {listaPlanetas()}

            <input type="date" name={""} value={""} onChange={""} required />

            <textarea
              placeholder="Descrição"
              name={""}
              value={""}
              onchange={""}
              required
            />

            <input
              type="number"
              placeholder="Duração em dias"
              name={""}
              value={""}
              onChange={""}
              required
            />

            <button> Criar </button>
          </form>
          <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
      </div>
    );
};

export default CadastroViagens;