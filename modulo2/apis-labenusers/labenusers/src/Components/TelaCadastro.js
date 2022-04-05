import React from 'react'



export default class TelaCadastro extends React.Component {

state = {
    ListaDeUsuarios: [],
    inputEmail: '',
    inputNome: ''
};

digitandoEmail = (event) => {
    this.setState({inputEmail: event.target.value});
    console.log(this.state.inputEmail)
};

digitandoNome = (event) => {
    this.setState({inputNome: event.target.value});
    console.log(this.state.inputNome)
};


    render () {

        return (
            <div>
                <h1> Cadastre-se! </h1>
                <div>
                    <label>
                        E-mail:
                        <input onChange={this.digitandoEmail} value={this.state.inputEmail} type="email" placeholder='E-mail'/>
                    </label>
                    <label>
                        Nome:
                        <input onChange={this.digitandoNome} value={this.state.inputNome} type='text' placeholder='Nome'/>
                    </label>
                    <button onClick={''}> Criar usuário </button> 
                </div>
            </div>
        )
    }
}