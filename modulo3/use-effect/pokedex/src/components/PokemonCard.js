import React, {useState, useEffect} from 'react';
import {ContainerCard, FotoPokemon, TextosPokemon} from './cardEstilo'
import axios from 'axios';

const PokemonCard = (props) => {
    const [pokemon, setPokemon] = useState({});

    const pegaPokemon = (nomePokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        .then((res) => {
            setPokemon(res.data);
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    useEffect(() => {
        pegaPokemon(props.pokemon);
    }, [props.pokemon]);

    const poke = pokemon;

    return (
        <ContainerCard>
            <TextosPokemon> Nome: {poke.name} </TextosPokemon>
            <TextosPokemon> Peso: {poke.weight}Kg </TextosPokemon>
            {poke.types && <TextosPokemon> Tipo: {poke.types[0].type.name} </TextosPokemon>}
            {poke.sprites && (
                <FotoPokemon src={poke.sprites.front_default} alt={poke.name} />
            )}
        </ContainerCard>
    );
};

export default PokemonCard;