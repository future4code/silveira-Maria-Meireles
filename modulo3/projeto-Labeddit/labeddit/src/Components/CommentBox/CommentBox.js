import React from 'react'
import { sendNewComment } from '../../services/commentsRequests';
import useForm from "../../Hooks/useForm";


const CommentBox = (postId) => {
    const [form, onChangeInputs, clearForm] = useForm({ body: "" });
    const postID = postId.postId;

    const onSubmitComment = (event) => {
      event.preventDefault();
      sendNewComment(postID, form);
      clearForm()
    }

    return (
        <div>
            <form onSubmit={onSubmitComment}>
                <input 
                type='text'
                placeholder='Insira um comentário'
                name={"body"}
                value={form.body}
                onChange={onChangeInputs}
                required
                />

                <button type='submit'> 
                Enviar 
                </button>
            </form>
        </div>
    )
}

export default CommentBox;