import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { Player } from '../../../../nodecg/nodecg';
import { useReplicant } from '../../../hooks/nodecg';
import assetsNodecg from '../../../../nodecg/api/assets';
import { LoveCounter } from '../loves/counter';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    align-items: center;
`;

const IconImage = styled.img`
  max-height: 92%;
  max-width: 100%;
  object-fit: contain;
`;

const NameArea = styled.div`
    color: #ffffff;
    -webkit-text-stroke: 2px black;
    text-stroke: 2px black;
    text-align: center;
`;

const HeartArea = styled.div`
  height: 100%;
`;

type Props = {
    player: Player;
    'hide-icon'?: boolean;
}

export const Nameplate = ({ player, 'hide-icon': hideIcon }: Props) => {
  const icons = useReplicant('assets:icons');
  const assets = assetsNodecg();

  const iconImages = useMemo(() => {
    return assets.iconImages(icons);
  }, [icons]);

  const iconImage = iconImages[player.target ?? 'none'];
  const showIcon = iconImage && !hideIcon;

  return (
    <Container>
      {
        showIcon && (
          <IconImage src={iconImage} />
        )
      }
      {
        !showIcon && (<div></div>)
      }
      <NameArea>{player.name}</NameArea>
      <HeartArea>
        <LoveCounter pk={player.pk} />
      </HeartArea>
    </Container>
  );
};