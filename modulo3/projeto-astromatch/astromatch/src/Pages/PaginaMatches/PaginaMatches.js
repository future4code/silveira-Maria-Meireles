import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_url } from "../../contants/urls";
import { ContainerSite } from "../../contants/GlobalTemplate";
import BotaoLimpar from "../../Components/BotaoLimpar";
import { PerfilMatch, ListaMatch, ItemLista, BotoesContainer, BotaoVoltar, Mensagem } from "./style";

const PaginaMatches = (props) => {
  const [listaMatches, setListaMatches] = useState([]);

  const resgataMatches = () => {
    axios
      .get(`${BASE_url}/matches`)
      .then((res) => {
        setListaMatches(res.data.matches);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    resgataMatches();
  }, [props.listaMatches]);

  return (
    <ContainerSite>
      <ListaMatch>
        {listaMatches.length > 0 ? (
          listaMatches.map((match) => {
            return (
              <ItemLista key={match.id}>
                <PerfilMatch src={match.photo} />
                <span> {match.name} </span>
              </ItemLista>
            );
          })
        ) : (
          <Mensagem> Sua lista de matches está vazia! </Mensagem>
        )}
      </ListaMatch>
      <BotoesContainer>
        <BotaoVoltar onClick={props.voltaParaPerfis}> Voltar </BotaoVoltar>
        <BotaoLimpar resgataMatches={resgataMatches} />
      </BotoesContainer>
    </ContainerSite>
  );
};

export default PaginaMatches;
