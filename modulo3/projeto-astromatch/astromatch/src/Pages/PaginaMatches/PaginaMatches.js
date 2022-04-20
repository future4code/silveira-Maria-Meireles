import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_url } from "../../contants/urls";
import { ContainerSite } from "../../contants/GlobalTemplate";

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

  console.log(listaMatches)
  return (
    <ContainerSite>
      <ul>
          {listaMatches.length > 0 ? (listaMatches.map((match) => {
              return (
                  <li key={match.id}>
                      <img src={match.photo}/>
                      <span> {match.name} </span>
                  </li>
              );
          })) : <p> Sua lista de matches está vazia! </p>
        }
      </ul>
    </ContainerSite>
  );
};

export default PaginaMatches;
