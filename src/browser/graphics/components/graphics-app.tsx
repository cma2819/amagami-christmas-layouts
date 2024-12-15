import React, { ReactNode } from 'react';
import { ReplicantProvider } from '../../ReplicantProvider';
import { PlayersProvider } from '../../PlayersProvider';
import './style.css';

type GraphicsAppProps = {
    children: ReactNode;
};

export const GraphicsApp = ({ children }: GraphicsAppProps) => {
  return (
    <ReplicantProvider>
      <PlayersProvider>
        { children }
      </PlayersProvider>
    </ReplicantProvider>
  );
};