import React, { useCallback, useMemo } from 'react';
import Grid from '@mui/material/Grid2';
import { usePlayers, useReplicant } from '../../../hooks/nodecg';
import { Scene } from '../../../../nodecg/replicants';
import nodecgScene from '../../../../nodecg/api/scene';
import { resolveHeroinName } from '../players';
import { SceneCharacter } from '../../../../nodecg/generated';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Player } from '../../../../nodecg/nodecg';

type SceneSelectItem = {
    label: string;
    value: string;
    onSelect: () => void;
}

const characters = [
  'ayatsuji',
  'sakurai',
  'tanamachi',
  'nakata',
  'nanasaki',
  'morishima',
  'none',
] as const;

const SceneListRow = ({ scene, selected }: { scene: SceneSelectItem, selected: boolean }) => {
  return (
    <ListItem>
      <ListItemButton onClick={scene.onSelect}>
        { selected && (
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
        )}
        <ListItemText inset={!selected}>{ scene.label }</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

const SceneSelector = () => {
  const players = usePlayers();
  const scene = useReplicant('scene');

  const sceneApi = nodecgScene(nodecg);

  const makeCharacterSelectItem = useCallback((heroine: SceneCharacter['character']): SceneSelectItem => ({
    label:  `キャラ注目 - ${resolveHeroinName(heroine)}`,
    value: `character_${heroine}`,
    onSelect: () => {
      sceneApi.goCharacter(heroine);
    }
  }), [sceneApi]);

  const makeSoloSelectItem = useCallback((player: Player): SceneSelectItem => {
    return {
      label: `単体 - ${player.name}`,
      value: `solo_${player.pk}`,
      onSelect: () => {
        sceneApi.goSolo(player.pk);
      }
    };
  }, [sceneApi]);
  
  const sceneItems = useMemo((): SceneSelectItem[] => {
    return [
      {
        label: '全体',
        value: 'all',
        onSelect: () => {
          sceneApi.goAll();
        }
      },
      ... characters.map(makeCharacterSelectItem),
      ... players.map(makeSoloSelectItem),
    ];
  }, [ players ]);

  const sceneFromValue = (scene: Scene): string => {
    if (scene.type === 'character') {
      return makeCharacterSelectItem(scene.character).value;
    }
    if (scene.type === 'solo') {
      const player = players.find(p => p.pk === scene.solo);
      return player ? makeSoloSelectItem(player).value : 'all';
    }
    return 'all';
  };

  const selected = sceneFromValue(scene);

  return (
    <Grid container component={Paper}>
      <Grid size={12}>
        <List dense>
          {
            sceneItems.map(item => 
              <SceneListRow selected={item.value === selected} key={item.value} scene={item} />
            )
          }
        </List>
      </Grid>
    </Grid>
  );
};

export default SceneSelector;