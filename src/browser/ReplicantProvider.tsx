import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Assets, Loves, ReplicantMap, Scene } from '../nodecg/replicants';
import clone from 'lodash.clone';

export type Replicants = Pick<
ReplicantMap,
'assets:icons' |
'assets:stands' |
'scene' |
'loves'
>

const defaultValues: Replicants = {
  'assets:icons': [],
  'assets:stands': [],
  scene: {
    type: 'all',
  },
  loves: {},
} as const;

export const ReplicantContext = createContext<Replicants>(defaultValues);

export const ReplicantProvider = ({ children }: { children: ReactNode}) => {
  const [ assetIcons, setAssetIcons ] = useState<Assets>(defaultValues['assets:icons']);
  const [ assetStands, setAssetStands ] = useState<Assets>(defaultValues['assets:stands']); 
  const [ scene, setScene ] = useState<Scene>(defaultValues['scene']);
  const [ loves, setLoves ] = useState<Loves>(defaultValues['loves']);

  useEffect(() => {
    nodecg.Replicant('assets:icons').on('change', (newVal) => {
      setAssetIcons(clone(newVal));
    });
    nodecg.Replicant('assets:stands').on('change', (newVal) => {
      setAssetStands(clone(newVal));
    });
    nodecg.Replicant('scene').on('change', (newVal) => {
      setScene(clone(newVal));
    });
    nodecg.Replicant('loves').on('change', (newVal) => {
      setLoves(clone(newVal));
    });
  }, []);

  return (
    <ReplicantContext.Provider value={{
      'assets:icons': assetIcons,
      'assets:stands': assetStands,
      scene,
      loves,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
};
