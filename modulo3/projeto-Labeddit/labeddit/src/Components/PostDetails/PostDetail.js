import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../Hooks/useRequestData'

const PostDetail = (postId) => {
    const posts = useRequestData([], `${BASE_URL}/posts`);
    const postID = postId.postId

    const filteredPost = posts && posts.filter((post) => {
        return post.id === postID
    }).map((post) => {
        return (
            <div key={post.id}>
              <div>
                <span> {post.username} </span>
              </div>
              <p> {post.body} </p>
              <hr/>
            </div>
        )
    })
    return (
        <div>
            {filteredPost}
        </div>
    )
};
export default PostDetail;