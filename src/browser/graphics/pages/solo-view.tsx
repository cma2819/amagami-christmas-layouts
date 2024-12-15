import React from 'react';
import { render } from '../../render';
import { GraphicsApp } from '../components/graphics-app';
import styled from '@emotion/styled';
import { Nameplate } from '../components/nameplate';
import { usePlayers } from '../../hooks/nodecg';

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(1600px - 64px);
    height: calc(960px - 64px);
    display: grid;
    grid-template-rows: auto 720px;
    grid-template-columns: 1280px;
    align-items: stretch;
    padding: 64px;
`;

const NameArea = styled.div`
  font-size: 64px;
  font-weight: bold;
  height: 100%;
`;

const Video = styled.div`
  grid-row: 2 / 3;
  aspect-ratio: 16 / 9;
`;

const params = new URLSearchParams(location.search);
const pk = params.get('pk');

const SoloVideo = ({ pk }: {pk: string}) => {
  const players = usePlayers();
  const player = players.find(p => p.pk === pk);
    
  return (
    <Container>
      <NameArea>
        {
          player && (
            <Nameplate hide-icon player={player} />
          )
        }
      </NameArea>
      <Video></Video>
    </Container>
  );

};

const App = () => {
  return (
    <GraphicsApp>
      {
        pk && (
          <SoloVideo pk={pk} />
        )
      }
    </GraphicsApp>
  );
};

render(<App />);