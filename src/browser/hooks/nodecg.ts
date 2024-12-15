import { useContext } from 'react';
import { ReplicantContext, Replicants } from '../ReplicantProvider';
import { PlayersContext } from '../PlayersProvider';

type RepName = keyof Replicants;
export const useReplicant = <T extends RepName>(
  repName: T
): Replicants[T] => {
  return useContext(ReplicantContext)[repName];
};

export const usePlayers = () => {
  return useContext(PlayersContext);
};