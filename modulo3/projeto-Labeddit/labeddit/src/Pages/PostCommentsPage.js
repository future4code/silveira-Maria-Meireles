import React from 'react'
import CommentBox from '../Components/CommentBox/CommentBox';
import PostBox from '../Components/Post/PostBox'
import Header from '../Components/Header/Header';

const PostCommentPage = () => {
    return (
        <div>
            <Header />
            <CommentBox />
            <PostBox />
        </div>
    )
}

export default PostCommentPage;