import { NodeCG } from './nodecg';
import scene from './scene';

export default (nodecg: NodeCG) => {
  scene(nodecg);
  nodecg.Replicant('heroine-overwrite', {
    defaultValue: [],
  });
  nodecg.Replicant('loves', {
    defaultValue: {},
  });
};