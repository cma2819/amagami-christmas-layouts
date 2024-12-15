import styled from '@emotion/styled';
import { usePlayers } from '../../../hooks/nodecg';
import React from 'react';
import { VideoFrame } from './frame';
import { Players } from '../../../../nodecg/nodecg';

const params = new URLSearchParams(location.search);
const small = params.has('small');

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
`;

const ContainerForAll = styled(Container)`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-gap: 4px;
`;

const ContainerForCharacter = styled(Container)`
    grid-template-columns: ${small ? '1fr 1fr 1fr' : '1fr 1fr'};
    grid-template-rows: repeat(auto-fit, 48%);
    align-content: center;
    grid-gap: 4px;
`;

const VideoItem = styled.div`
  width: 100%;
  height: 100%;
`;

type PropsForAll = {
  for?: undefined;
};

type PropsForCharacter = {
  for: 'character',
  character: string,
}

type Props = PropsForAll | PropsForCharacter;

export const VideoGrid = (props: Props) => {
  const players = usePlayers();

  const Container = props.for === 'character'
    ? ContainerForCharacter
    : ContainerForAll;

  const filterPlayers = (players: Players) => {
    if (props.for === 'character') {
      return players.filter(p => p.target === props.character);
    }

    return players;
  };
  
  return (
    <Container>
      {
        filterPlayers(players).map(p => (
          <VideoItem key={p.pk}>
            <VideoFrame for={props.for ?? 'all'} player={p} />
          </VideoItem>
        ))
      }
    </Container>
  );

};