import { SceneCharacter } from '../../../../nodecg/generated';

const HeroineNameMap: Record<SceneCharacter['character'], string> = {
  ayatsuji: '絢辻 詞',
  sakurai: '桜井 梨穂子',
  tanamachi: '棚町 薫',
  nakata: '中多 紗江',
  nanasaki: '七咲 逢',
  morishima: '森島 はるか',
  none: '未定',
} as const;

export const resolveHeroinName = (identifier: SceneCharacter['character']): string => {
  return HeroineNameMap[identifier];
};