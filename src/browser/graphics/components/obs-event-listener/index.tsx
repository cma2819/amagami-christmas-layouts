import React, { useEffect } from 'react';

type Props = {
    obs: typeof obsstudio;
}

export const ObsEventListener = ({ obs }: Props) => {

  useEffect(() => {
    nodecg.Replicant('scene').on('change', (scene) => {
      switch (scene.type) {
      case 'all':
        obs.setCurrentScene('all');
        break;
      case 'character':
        obs.setCurrentScene(`character_${scene.character}`);
        break;
      case 'solo':
        obs.setCurrentScene(`solo_${scene.solo}`);
        break;
      }
    });
  }, []);

  return <>
  </>;
};