import { SceneCharacter } from '../generated';
import { BrowserNodecgInstance } from '../nodecg';

export default (nodecg: BrowserNodecgInstance) => {
  const config = nodecg.bundleConfig;
  const sceneReplicant = nodecg.Replicant('scene');

  return {
    goAll() {
      sceneReplicant.value = {
        type: 'all'
      };
    },

    goCharacter(character: SceneCharacter['character']) {
      sceneReplicant.value = {
        type: 'character',
        character,
      };
    },

    goSolo(solo: string) {
      if (!(config.players.some(player => player.pk === solo))) {
        return;
      }
      sceneReplicant.value = {
        type: 'solo',
        solo,
      };
    }
  };
};