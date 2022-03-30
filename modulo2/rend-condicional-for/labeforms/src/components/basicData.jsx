import React from "react"
import HigherEducation from "./higherEducation"

class BasicData extends React.Component {
    render() {

        return (
            <div>
                <h2> ETAPA 1: Dados gerais </h2>

                <p> Qual é o seu nome? </p>
                <input type="text" placeholder="Nome" value=" "/>

                <p> Quantos anos você tem? </p>
                <input type="number" placeholder="Idade" value=" "/>

                <p>Informe o seu endereço de e-mail: </p> 
                <input type="email" placeholder="E-mail" value=" "/>

                <p> Qual é o seu nível de escolaridade? </p>
                <select name="Grau de escolaridade">
                    <option value="medioIncompleto"> Ensino médio incompleto </option>
                    <option value="medioCompleto"> Ensino médio completo </option>
                    <option value="superiorIncompleto"> Ensino superior incompleto </option>
                    <option value="superiorCompleto"> Ensino superior completo </option>
                </select>

                <button onClick={this.nextPage}> Próxima etapa </button>
            </div>
        );
    };
};

export default BasicData;