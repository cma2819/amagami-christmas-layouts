import { usePlayers, useReplicant } from '../../../hooks/nodecg';
import assetsNodecg, { StandImages } from '../../../../nodecg/api/assets';
import styled from '@emotion/styled';
import { Scene } from '../../../../nodecg/replicants';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SwitchTransition, Transition, TransitionStatus } from 'react-transition-group';
import './style.css';
import { css, keyframes } from '@emotion/react';
import palette from '../../../palette';

type ContainerProps = {
  background?: string;
}

const fadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const FadeContainer = styled.div<{state: TransitionStatus}>`
  width: 100%;
  height: 100%;
  ${props => {
    switch (props.state) {
    case 'entering':
      return css`
      animation: ${fadeIn} 500ms ease-out 1 forwards;
    `;
    case 'exiting':
      return css`
      animation: ${fadeOut} 500ms ease-out 1 forwards;
    `;
    default:
      return '';
    }
  }}
`;

const shadowIn = keyframes`
  0% {
  }
  100% {
    box-shadow: inset 0px 0px 32px;
  }
`;

const shadowOut = keyframes`
  0% {
    box-shadow: inset 0px 0px 32px;
  }
  100% {
  }
`;

const ShadowContainer = styled.div<{state: TransitionStatus, color: string}>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: ${props => props.color};
  ${props => {
    switch (props.state) {
    case 'entering':
      return css`
      animation: ${shadowIn} 500ms ease-out 1 forwards;
    `;
    case 'exiting':
      return css`
      animation: ${shadowOut} 500ms ease-out 1 forwards;
    `;
    default:
      return css`
        box-shadow: inset 0px 0px 32px;
      `;
    }
  }}
`;

const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    background-size: 150%;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: top;
    background-image: ${props => props.background ? `url(${props.background})` : 'none'};
    filter: drop-shadow(0 0 24px #000);
`;

export const HeroineOverlay = () => {
  const [ standImages, setStandImages ] = useState<StandImages>();

  const assets = assetsNodecg();
  const players = usePlayers();

  const sceneToHeroine = useCallback((scene: Scene) => {
    switch (scene.type) {
    case 'all':
      return null;
    case 'character':
      return scene.character;
    case 'solo':
      return players.find(p => p.pk === scene.solo)?.target ?? null;
    default:
      return null;
    }
  }, [players]);

  useEffect(() => {
    nodecg.Replicant('assets:stands').on('change', newVal => {
      try {
        setStandImages(assets.standImages(newVal));
      } catch {
        console.warn('Stands not initialized');
      }
    });
  }, []);

  const scene = useReplicant('scene');
  const heroine = sceneToHeroine(scene);
  const heroineColor = palette.heroines[heroine ?? 'none'];
  const background = (heroine && standImages && heroine !== 'none' ? standImages[heroine] : undefined);

  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <Transition
        key={heroine}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend',done, false);
        }}
        ref={nodeRef}
        timeout={1000}
        unmountOnExit
      >
        {
          state => (
            <>
              <FadeContainer state={state}>
                <Container background={background}></Container>
              </FadeContainer>
              <ShadowContainer state={state} color={heroineColor} />
            </>
          )
        }
      </Transition>
    </SwitchTransition>);
};