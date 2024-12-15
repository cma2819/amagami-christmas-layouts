import { BrowserNodecgInstance } from '../nodecg';

const loves = (nodecg: BrowserNodecgInstance) => {
  const lovesRep = nodecg.Replicant('loves');

  return {
    update: (pk: string, count: number) => {
      if (!lovesRep.value) {
        return;
      }
      lovesRep.value[pk] = count;
    },

    reset: (pk: string) => {
      if (!lovesRep.value) {
        return;
      }
      delete lovesRep.value[pk];
    },

    resetAll: () => {
      lovesRep.value = {};
    }
  };
};

export default loves;