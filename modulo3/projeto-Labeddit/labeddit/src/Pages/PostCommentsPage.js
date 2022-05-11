import React from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';
import useRequestData from '../Hooks/useRequestData';

const PostCommentsPage = () => {
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const formatedComments = comments && comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div>
                    <span> {comment.username} </span>
                    <p> {comment.body} </p>
                </div>
            </div>
        )
    })
    return (
        <div>
            {formatedComments}
        </div>
    )
}

export default PostCommentsPage;