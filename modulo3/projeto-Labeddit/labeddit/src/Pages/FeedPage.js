import React from 'react'
import CreatePostBox from '../Components/CreatePost/CreatePostBox';
import Header from '../Components/Header/Header';
import PostBox from '../Components/Post/PostBox';
import useProttectedPage from '../Hooks/useProttectedPage';
import styled from 'styled-components'

const FeedContainer = styled.div`
width: 100vw;
`
const FeedPage = () => {
    useProttectedPage()

    return (
        <>
            <Header/>
            <FeedContainer>
                <CreatePostBox/>
                <PostBox/>
            </FeedContainer>
        </>
    )
}

export default FeedPage;