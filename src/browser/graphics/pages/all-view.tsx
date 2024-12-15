import React from 'react';
import { render } from '../../render';
import { GraphicsApp } from '../components/graphics-app';
import styled from '@emotion/styled';
import { VideoGrid } from '../components/videos/grid';

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
`;

const App = () => {
  return (
    <GraphicsApp>
      <Container>
        <VideoGrid />
      </Container>
    </GraphicsApp>
  );
};

render(<App />);