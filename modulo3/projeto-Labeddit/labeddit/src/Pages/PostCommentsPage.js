import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';
import PostDetail from '../Components/PostDetails/PostDetail';
import useRequestData from '../Hooks/useRequestData';
import CommentBox from '../Components/CommentBox/CommentBox';
import useProttectedPage from '../Hooks/useProttectedPage';
import { supComment, downComment, deleteCommentVote } from '../services/commentsRequests';
import { onClickUp, onClickDown } from '../services/votesRequests';

const PostCommentsPage = () => {
    useProttectedPage();
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [commentVote, setCommentVote] = useState(false)
    

    const formatedComments = comments && comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div>
                    <span> {comment.username} </span>
                    <p> {comment.body} </p>
                </div>
                <div>
                    <button 
                    onClick={() => onClickUp(commentVote,
                    setCommentVote, 
                    supComment(comment.id, setCommentVote), 
                    comment.id, 
                    deleteCommentVote(comment.id, setCommentVote))}
                    > 
                    {comment.voteSum} 
                    </button>

                    <button 
                    onClick={() => onClickDown(commentVote, 
                    setCommentVote, 
                    downComment(comment.id, setCommentVote), 
                    comment.id, 
                    deleteCommentVote(comment.id, setCommentVote))}
                    >
                     X 
                    </button> 
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