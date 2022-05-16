import React, { useEffect } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { goToPostComments } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { PostContainer, PostCard, PostAuthor, PostTitle, ContainerButtons, CommentIconContainer } from './style'
import FeedButtons from '../FeedButtons/FeedButtons'
import Comment from '../../assets/Comment.png'

const PostBox = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate();

    const onClickPost = (id) => {
      goToPostComments(navigate, id)
    }
    
    const formatedPosts = posts && posts.map((post) => {
          return (
            <PostCard key={post.id}>
              <div>
                <PostAuthor> Enviado por: {post.username} </PostAuthor>
              </div>
              <PostTitle> {post.title} </PostTitle>
              <p> {post.body} </p>
              
              <ContainerButtons>
                <FeedButtons id={post.id} votesQuantity={post.voteSum}/>
                <CommentIconContainer>
                  <button  onClick={() => onClickPost(post.id)}> <img src={Comment} /> </button>
                  <p> {post.commentCount > 0 ? post.commentCount : 0} </p>
                </CommentIconContainer>
              </ContainerButtons>
            </PostCard>
          );
        });

    return (
      <PostContainer>
        {formatedPosts}
      </PostContainer>
    );
}

export default PostBox;