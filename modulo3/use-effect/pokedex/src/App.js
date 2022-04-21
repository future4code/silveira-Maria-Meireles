import React, { useState, useEffect } from "react";
import { FundoVerm, ContainerCard, SelectPokemon} from "./style";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [listaPokemons, setListaPokemons] = useState([]);
  const [nomePokemon, setNomePokemon] = useState("");

  const resgatarPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setListaPokemons(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    resgatarPokemons();
  }, []);

  const aoSelecionarPokeNome = (event) => {
    setNomePokemon(event.target.value);
  };

  return (
    <>
      <FundoVerm />
      <ContainerCard>
        <SelectPokemon onChange={aoSelecionarPokeNome}>
          <option value={""}> Nenhum </option>
          {listaPokemons.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
          ;
        </SelectPokemon>

        {nomePokemon && <PokemonCard pokemon={nomePokemon} />}
      </ContainerCard>
    </>
  );
};

export default App;
