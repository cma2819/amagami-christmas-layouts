'use strict';

var scene = (nodecg) => {
  nodecg.Replicant("scene", {
    defaultValue: {
      type: "all"
    }
  });
};

var index = (nodecg) => {
  scene(nodecg);
  nodecg.Replicant("heroine-overwrite", {
    defaultValue: []
  });
  nodecg.Replicant("loves", {
    defaultValue: {}
  });
};

module.exports = index;
//# sourceMappingURL=index.js.map
