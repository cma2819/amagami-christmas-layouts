import React from 'react';
import { render } from '../../render';
import { DashboardThemeProvider } from '../DashboardThemeProvider';
import { ReplicantProvider } from '../../ReplicantProvider';
import SceneSelector from '../models/scenes/scene-selector';
import { PlayersProvider } from '../../PlayersProvider';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <PlayersProvider>
          <SceneSelector />
        </PlayersProvider>
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

render(<App />);