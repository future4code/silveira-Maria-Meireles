import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';
import PostDetail from '../Components/PostDetails/PostDetail';
import useRequestData from '../Hooks/useRequestData';
import CommentBox from '../Components/CommentBox/CommentBox';
import useProttectedPage from '../Hooks/useProttectedPage';

const PostCommentsPage = () => {
    useProttectedPage();
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
            <PostDetail postId={params.id}/>
            <CommentBox postId={params.id} comments={comments}/>
            {formatedComments}
        </div>
    )
}

export default PostCommentsPage;