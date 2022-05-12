import React from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { goToPostComments } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { PostContainer } from './style'
import { createPositiveVote } from '../../services/postsRequests'

const PostBox = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate();

    const onClickPost = (id) => {
      goToPostComments(navigate, id)
    }

    const formatedPosts = posts && posts.map((post) => {
          return (
            <PostContainer key={post.id}>
              <div>
                <span> {post.username} </span>
              </div>
              <h3> {post.title} </h3>
              <p> {post.body} </p>
              
              <div>
                <button> curtir </button>
                <button> descurtir </button>
                <button  onClick={() => onClickPost(post.id)}> Comentarios </button>
              </div>
            </PostContainer>
          );
        });

    return (
      <div>
        {formatedPosts}
      </div>
    );
}

export default PostBox;