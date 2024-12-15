import React from 'react';
import { ObsEventListener } from '../components/obs-event-listener';
import { render } from '../../render';
const App = () => {

  const obs = window.obsstudio;

  return (
    <>
      <div>OBS: { obs.pluginVersion }</div>
      <ObsEventListener obs={obs} />
    </>
  );
};

render(<App />);