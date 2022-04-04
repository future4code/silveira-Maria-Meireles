import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/30/70'}
          fotoPost={'https://picsum.photos/260/180'}
        />

        <Post
          nomeUsuario={'duda'}
          fotoUsuario={'https://picsum.photos/70/90'}
          fotoPost={'https://picsum.photos/300/250'}
        />

        <Post
          nomeUsuario={'marina'}
          fotoUsuario={'https://picsum.photos/90/90'}
          fotoPost={'https://picsum.photos/400/650'}
        />
      </MainContainer>
    );
  }
}

export default App;
