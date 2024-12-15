import { SceneCharacter } from '../generated';
import { Assets } from '../replicants';

export type StandImages = Record<Exclude<SceneCharacter['character'], 'none'>, string>;
export type IconImages = Record<SceneCharacter['character'], string | null>;

export default () => {

  return {
    standImages(assets: Assets): StandImages {
      const findAsset = (name: string) => {
        const target = assets.find(asset => asset.name === name);
        if (!target) {
          throw new Error(`Stand for ${name} is not found`);
        }
        return target.url;
      };

      return {
        ayatsuji: findAsset('ayatsuji'),
        sakurai: findAsset('sakurai'),
        tanamachi: findAsset('tanamachi'),
        nakata: findAsset('nakata'),
        nanasaki: findAsset('nanasaki'),
        morishima: findAsset('morishima'),
      };
    },

    iconImages(assets: Assets): IconImages {
      const findAsset = (name: string) => {
        const target = assets.find(asset => asset.name === name);
        if (!target) {
          return null;
        }
        return target.url;
      };

      return {
        none: findAsset('none'),
        ayatsuji: findAsset('ayatsuji'),
        sakurai: findAsset('sakurai'),
        tanamachi: findAsset('tanamachi'),
        nakata: findAsset('nakata'),
        nanasaki: findAsset('nanasaki'),
        morishima: findAsset('morishima'),
      };

    }
  };
};