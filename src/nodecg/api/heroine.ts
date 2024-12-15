import { SceneCharacter } from '../generated';
import { BrowserNodecgInstance } from '../nodecg';

const heroine = (nodecg: BrowserNodecgInstance) => {
  const overwriteRep = nodecg.Replicant('heroine-overwrite');

  return {
    save(pk: string, target: SceneCharacter['character'] | null) {
      overwriteRep.value = [
        ... (overwriteRep.value?.filter((ow) => {
          return ow.pk !== pk;
        }) ?? []),
        {
          pk,
          target,
        }
      ];
    }
  };
};

export default heroine;