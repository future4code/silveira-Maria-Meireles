import React from 'react'

class WhithoutHighEducation extends React.Component {
    render () {

        return (
            <div>
                <h2>
                    ETAPA 2: Informações educacionais
                </h2>

                <p> Por que você não completou sua graduação? </p>
                <input type="text" placeholder='resposta' value=" "/>
                
                <p> Você tem algum curso complementar? </p>
                <select name="cursoComplementar">
                    <option value="tecnico"> Curso técnico </option>
                    <option value="ingles"> Curso de inglês </option>
                    <option value="semCurso"> Não fiz curso complementar </option>
                </select>

                <button> Finalizar </button>
            </div>
        );
    };
};

export default WhithoutHighEducation;