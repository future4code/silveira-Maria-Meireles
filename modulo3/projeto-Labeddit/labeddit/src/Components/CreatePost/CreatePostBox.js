import React from 'react';
import axios from 'axios';
import { token } from "../../constants/tokens";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hooks/useForm";
import { CreateCommentForm } from './style';

const CreatePostBox = () => {
    const [form, onChangeInputs, clearForm] = useForm({ title: "", body: "" });

    const onSubmitPost = (event) => {
      event.preventDefault();
      sendNewPost();
      clearForm();
    }

      const sendNewPost = () => {
        const url = `${BASE_URL}/posts`;
        const acessToken = token;

        axios
          .post(url, form, {
            headers: {
              Authorization: acessToken,
            },
          })
          .then((res) => {
            alert("Post criado!");
          })
          .catch((err) => {
              console.log(err.response)
            alert("Algo deu errao. Por favor, tente novamente.");
          });
      };

    return (
        <div>
            <CreateCommentForm onSubmit={onSubmitPost}>
                <input
                type='text'
                placeholder='Título'
                name={"title"}
                value={form.title}
                onChange={onChangeInputs}
                required
                />

                <textarea
                placeholder='Escreva seu post...'
                name={"body"}
                value={form.body}
                onChange={onChangeInputs}
                required
                />

                <button type='submit'> 
                Enviar 
                </button>
            </CreateCommentForm>
        </div>
    )
}

export default CreatePostBox;