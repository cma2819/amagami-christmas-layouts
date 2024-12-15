import React, { useEffect, useState } from 'react';
import { usePlayers, useReplicant } from '../../../hooks/nodecg';
import Grid from '@mui/material/Grid2';
import styled from '@emotion/styled';
import loveIcon from './love.png';
import loveNodecg from '../../../../nodecg/api/loves';

const LoveButtonElement = styled.button`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(${loveIcon});
    background-size: contain;
    background-repeat: no-repeat;
    border: unset;
    color: white;
    aspect-ratio: 1;
    font-size: 48px;
    &:active {
        opacity: 0.5;
    }
`;

export const LoveButton = ({ pk }: { pk: string }) => {
  const loves = useReplicant('loves');
  const players = usePlayers();
  const player = players.find(p => p.pk === pk);
  const playerLove = player && player.pk in loves ? loves[player.pk] : 0;
  const [ love, setLove ] = useState<number>();

  useEffect(() => {
    setLove(playerLove);
  }, [playerLove]);

  const loveApi = loveNodecg(nodecg);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (love) {
        loveApi.update(pk, love);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [love]);

  const addLove = () => {
    setLove(l => (l ?? 0) + 1);
  };

  return (
    <Grid container alignContent='center' sx={{
      fontSize: '36px',
    }}>
      {
        !player && (
          <Grid size={12}>{`player ${pk} is not found`}</Grid>
        )
      }
      {
        player && (
          <>
            <Grid size={12} sx={{
              color: 'white',
              WebkitTextStroke: '1px black',
              textStroke: '1px black',
              textAlign: 'center',
            }}>
              { player.name }
            </Grid>
            <Grid size={12}>
              <LoveButtonElement type='button' onClick={addLove}>
                { love }
              </LoveButtonElement>
            </Grid>
          </>
        )
      }
    </Grid>
  );
};