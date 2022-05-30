import React from 'react'
import { BASE_URL } from '../constants/urls';
import useRequestData from '../Hooks/useRequestData';
import { goToPostComments } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import CreatePostBox from '../Components/CreatePost/CreatePostBox';
import { createPostVote, votePostDown } from '../services/postsRequests';
import Header from '../Components/Header/Header';

const FeedPage = () => {
    const [posts, setPosts] = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate()

    const postBlock = posts && posts.map((post) => {
        return (
            <div key={post.id}>
                <span> Enviado por: {post.username} </span> 
                <h3> {post.title} </h3>

                <div>
                    <div>
                        <button onClick={() => createPostVote(post.id)}> Positivo </button>
                        {post.voteSum}
                        <button onClick={() => votePostDown(post.id)}> Negativo </button>
                    </div>
                    <div>
                        <button onClick={() => goToPostComments(navigate, post.id)}> Comentários </button>
                        {post.commentCount}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <Header />
            <CreatePostBox />
            {postBlock}
        </div>
    )
}

export default FeedPage;