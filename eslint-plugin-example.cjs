const enforceNoLet = require("./enforce-no-let.cjs");
const plugin = {
  rules: {
    "enforce-no-let": enforceNoLet,
  },
};
module.exports = plugin;
