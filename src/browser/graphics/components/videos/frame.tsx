import styled from '@emotion/styled';
import React from 'react';
import { Player } from '../../../../nodecg/nodecg';
import palette from '../../../palette';
import { Nameplate } from '../nameplate';

const Container = styled.div<{color: string}>`
    width: 100%;
    height: 100%;
    display: grid;
    /* justify-items: stretch;
    align-items: stretch; */
    column-count: 1;
    grid-template-rows: auto 1fr;
    /* background-color: ${props => props.color}; */
`;

const Info = styled.div<{color: string}>`
    grid-row: 1 / 2;
    border: 4px solid ${props => props.color};
    border-bottom: none;
    /* background: ${props => props.color}; */
    align-self: end;
    height: 64px;
`;

const NameArea = styled.div`
  font-size: 46px;
  font-weight: bold;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 100%;
`;

const Video = styled.div<{color: string}>`
  grid-row: 2 / 3;
  /* background-color: rgba(0, 0, 0, 0.5); */
  border: 4px solid ${props => props.color};
  border-top: none;
  /* aspect-ratio: 16 / 9; */
`;

type Props = {
  player: Player;
  for: 'all' | 'character' | 'solo'
}

export const VideoFrame = ({ player, for: _for }: Props) => {
  const color = palette.heroines[player.target ?? 'none'];

  return (
    <Container color={color}>
      <Info color={color}>
        <NameArea>
          <Nameplate hide-icon={_for !== 'all'} player={player} />
        </NameArea>
      </Info>
      <Video color={color}></Video>
    </Container>
  );
};