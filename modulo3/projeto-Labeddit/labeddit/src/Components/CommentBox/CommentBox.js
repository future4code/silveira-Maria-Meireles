import React from 'react'
import useForm from '../../Hooks/useForm'
import { useParams } from 'react-router-dom'
import { sendNewComment } from '../../services/commentsRequests'

const CommentBox = (props) => {
    const params = useParams()
    const [form, onChangeForm, clearFields] = useForm({body: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        sendNewComment(params.id, form)
        clearFields()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input 
                type='text'
                placeholder='Escreva seu comentário...'
                name={'body'}
                value={form.body}
                onChange={onChangeForm}
                required
                />

                <button> Comentar </button> 
            </form>
        </div>
    )
}

export default CommentBox;