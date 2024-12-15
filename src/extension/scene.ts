import { NodeCG } from './nodecg';

export default (nodecg: NodeCG) => {
  nodecg.Replicant('scene', {
    defaultValue: {
      type: 'all'
    }
  });
};