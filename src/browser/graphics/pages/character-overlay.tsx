import styled from '@emotion/styled';
import { GraphicsApp } from '../components/graphics-app';
import React from 'react';
import { render } from '../../render';
import { HeroineOverlay } from '../components/heroine-overlay';

const Container = styled.div`
    position: absolute;
    width: 1920px;
    height: 1080px;
    display: grid;
    grid-template-columns: 1600px 320px;
    grid-template-rows: 900px 180px;
`;

const HeroineArea = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`;

const App = () => {
  return (
    <GraphicsApp>
      <Container>
        <HeroineArea>
          <HeroineOverlay />
        </HeroineArea>
      </Container>
    </GraphicsApp>
  );
};

render(<App />);