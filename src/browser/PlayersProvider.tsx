import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Players } from '../nodecg/nodecg';

export const PlayersContext = createContext<Players>([]);

export const PlayersProvider = ({ children }: { children: ReactNode}) => {
  const [ players, setPlayers ] = useState<Players>([]);
  
  useEffect(() => {
    nodecg.Replicant('heroine-overwrite').on('change', newVal => {
      const configPlayers = nodecg.bundleConfig.players;

      setPlayers(
        configPlayers.map((cp) => {
          const overwrite = newVal.find(ow => ow.pk === cp.pk);
          return overwrite ? {
            ... cp,
            target: overwrite.target,
          } : cp;
        })
      );
    });
  }, []);

  return (
    <PlayersContext.Provider value={ players }>
      { children }
    </PlayersContext.Provider>
  );
};