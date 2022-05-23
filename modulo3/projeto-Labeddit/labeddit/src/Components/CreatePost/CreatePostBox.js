import React from 'react';
import useForm from "../../Hooks/useForm";
import { CreateCommentForm, FormContainer } from './style';
import { sendNewPost } from '../../services/postsRequests';
import { PostButton } from './style';

const CreatePostBox = () => {
    const [form, onChangeInputs, clearForm] = useForm({ title: "", body: "" });

    const onSubmitPost = (event) => {
      event.preventDefault();
      sendNewPost(form);
      clearForm();
    }

    return (
        <FormContainer>
            <CreateCommentForm onSubmit={onSubmitPost}>
                <input
                type='text'
                placeholder='Título'
                name={"title"}
                value={form.title}
                onChange={onChangeInputs}
                required
                />

                <input className='postContent'
                type='text'
                placeholder='Escreva seu post...'
                name={"body"}
                value={form.body}
                onChange={onChangeInputs}
                required
                />

                <PostButton type='submit'> 
                Enviar 
                </PostButton>
            </CreateCommentForm>
        </FormContainer>
    )
}

export default CreatePostBox;