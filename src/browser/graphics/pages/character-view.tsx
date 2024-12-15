import React from 'react';
import { render } from '../../render';
import { GraphicsApp } from '../components/graphics-app';
import styled from '@emotion/styled';
import { VideoGrid } from '../components/videos/grid';

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(1600px - 16px);
    height: calc(960px - 16px);
    padding: 16px;
`;

const params = new URLSearchParams(location.search);
const character = params.get('ch') ?? 'ayatsuji';

const App = () => {
  return (
    <GraphicsApp>
      <Container>
        <VideoGrid for='character' character={character} />
      </Container>
    </GraphicsApp>
  );
};

render(<App />);