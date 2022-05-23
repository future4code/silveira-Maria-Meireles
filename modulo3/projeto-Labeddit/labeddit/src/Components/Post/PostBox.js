import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../Hooks/useRequestData";
import { createCommentVote, voteCommentDown } from "../../services/commentsRequests";

const PostBox = () => {
    const params = useParams()
    const [postComments, setComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const comments = postComments && postComments.map((comment) => {
        return (
            <div key={comment.id}>
                <p> Enviado por: {comment.username} </p>
                <p> {comment.body} </p>

                <div>
                    <button onClick={() => createCommentVote(comment.id)}> Positivo </button> 
                    {comment.voteSum}
                    <button onClick={() => voteCommentDown(comment.id)}> Negativo </button> 
                </div>
            </div>
        )
    })
    return (
        <div>
            {comments.length > 0 ? comments : "Comentários vazios!"}
        </div>
    )
}

export default PostBox;