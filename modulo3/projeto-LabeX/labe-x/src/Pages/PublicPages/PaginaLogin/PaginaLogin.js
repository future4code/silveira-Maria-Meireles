import axios from "axios";
import { useState } from "react";
import { BASE_url } from '../../../constants/urls';
import { vaiParaAdmin } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const PaginaLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate()


  const digitandoEmail = (event) => {
    setEmail(event.target.value);
  };

  const digitandoSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviaDadosLogin = () => {
    const url = `${BASE_url}/login`
    const body = {
      email: email,
      password: senha
    };

    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        vaiParaAdmin(navigate)
      })
      .catch((err) => {
        console.log("Deu errado: ", err.response);
      });
  };

  return (
    <div>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={digitandoEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={senha}
        onChange={digitandoSenha}
      />
      <button onClick={enviaDadosLogin}>Enviar</button>
    </div>
  );
};

export default PaginaLogin;