import { Button, FormControl, List, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid2';
import { usePlayers, useReplicant } from '../../../hooks/nodecg';
import { Player } from '../../../../nodecg/nodecg';
import { SceneCharacter } from '../../../../nodecg/generated';
import { resolveHeroinName } from '.';
import heroineNodecg from '../../../../nodecg/api/heroine';
import lovesNodecg from '../../../../nodecg/api/loves';
import FavoriteIcon from '@mui/icons-material/Favorite';

const characters = [
  'ayatsuji',
  'sakurai',
  'tanamachi',
  'nakata',
  'nanasaki',
  'morishima',
] as const;

const loveApi = lovesNodecg(nodecg);

const HeroineSelect = ({ value, onSelect }: {
    value: SceneCharacter['character'] | null,
    onSelect: (heroine: SceneCharacter['character'] | null) => void;
}) => {
  return (
    <FormControl size="small">
      <Select value={value ?? 'none'} sx={{ minWidth: '140px'}} onChange={(e) => {
        const v = e.target.value;
        if (characters.includes(v as SceneCharacter['character'])) {
          onSelect(v as SceneCharacter['character']);
          return;
        }
        onSelect(null);
      }}>
        <MenuItem value='none'>未定</MenuItem>
        { characters.map(character => (
          <MenuItem key={character} value={character}>{resolveHeroinName(character)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const PlayerRow = ({player, love}: { player: Player, love: number }) => {
  const heroine = useMemo(() => heroineNodecg(nodecg), []);

  const resetLove = () => {
    if (confirm(`${player.name} のカウンターをリセットしますか？`)) {
      loveApi.reset(player.pk);
    }
  };

  return (
    <TableRow>
      <TableCell>{player.name}</TableCell>
      <TableCell>
        <HeroineSelect value={player.target} onSelect={(h) => {
          heroine.save(player.pk, h);
        }} />
      </TableCell>
      <TableCell align='center'>
        {love}
      </TableCell>
      <TableCell align='center'>
        <Button variant='outlined' onClick={resetLove}>
          リセット
        </Button>
      </TableCell>
    </TableRow>
  );
};

const PlayerControl = () => {
  const players = usePlayers();
  const loves = useReplicant('loves');

  const resetAllLoves = () => {
    if (confirm('カウンターを全てリセットしますか？')) {
      loveApi.resetAll();
    }
  };
    
  return (
    <Grid container component={Paper}>
      <Grid size={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>担当</TableCell>
                <TableCell colSpan={2} align='center'>
                  <FavoriteIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                players.map(p => 
                  <PlayerRow key={p.pk} player={p} love={p.pk in loves ? loves[p.pk] : 0} />
                )
              }
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell colSpan={2} align='center'>
                  <Button variant='contained' color='warning' onClick={resetAllLoves}>
                    一括リセット
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <List>
        </List>
      </Grid>
    </Grid>
  );
};

export default PlayerControl;