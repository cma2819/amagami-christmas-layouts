import React from 'react';
import { GraphicsApp } from '../components/graphics-app';
import styled from '@emotion/styled';
import { render } from '../../render';
import { LoveButton } from '../components/loves/button';

const Container = styled.div`
  max-width: 320px;
`;

const params = new URLSearchParams(location.search);
const pk = params.get('pk');

const App = () => {
  return (
    <GraphicsApp>
      <Container>
        {
          pk && (
            <LoveButton pk={pk} />
          )
        }
      </Container>
    </GraphicsApp>
  );
};
  
render(<App />);