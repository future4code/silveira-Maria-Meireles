import React from 'react';
import useForm from "../../Hooks/useForm";
import {sendNewPost} from '../../services/postsRequests'

const CreatePostBox = () => {
    const [form, onChangeForm, clearFields] = useForm({title: '', body: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        sendNewPost(form)
        clearFields()

    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
            <input
            type='text'
            placeholder='Título'
            name={'title'}
            value={form.title}
            onChange={onChangeForm}
            required
            />

            <input 
            type='text'
            placeholder='Escreva seu post...'
            name={'body'}
            value={form.body}
            onChange={onChangeForm}
            required
            />

            <button> Postar </button> 
            </form>
            <hr/>
        </div>
    )
}

export default CreatePostBox;