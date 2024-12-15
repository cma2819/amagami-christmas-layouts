import React from 'react';
import { ReplicantProvider } from '../../ReplicantProvider';
import { DashboardThemeProvider } from '../DashboardThemeProvider';
import { render } from '../../render';
import { PlayersProvider } from '../../PlayersProvider';
import PlayerControl from '../models/players/player-control';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <PlayersProvider>
          <PlayerControl />
        </PlayersProvider>
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

render(<App />);