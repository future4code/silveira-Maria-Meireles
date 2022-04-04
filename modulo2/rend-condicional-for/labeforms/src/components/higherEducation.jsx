import React from 'react'

class HigherEducation extends React.Component {
    render() {

        return (
            <div>
                <h2>
                    ETAPA 2: Informações educacionais 
                </h2>

                <p> Em que curso você se formou? </p>
                <input type="text" placeholder='curso' value=" "/>

                <p> Em qual instituição de ensino? </p>
                <input type="text" placeholder="Instituição" value=" "/>

                <button> Próxima etapa </button>

            </div>   
        );
    };
};

export default HigherEducation;