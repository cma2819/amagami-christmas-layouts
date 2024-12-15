import styled from '@emotion/styled';
import loveIcon from './love.png';
import React from 'react';
import { useReplicant } from '../../../hooks/nodecg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
    background-image: url(${loveIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 65%;
    color: #ffffff;
    -webkit-text-stroke: 2px black;
    text-stroke: 2px black;
    min-width: 3rem;
`;

type Props = {
    pk: string;
}

export const LoveCounter = ({pk}: Props) => {
  const loves = useReplicant('loves');

  return (
    <Container>
      { pk in loves ? loves[pk] : 0 }
    </Container>
  );
};