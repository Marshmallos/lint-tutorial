module.exports = {
  meta: {
    type: "problem",
    docs: {
      dscription: "Enforce that no let syntax can be used.",
    },
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
      VariableDeclarator(node) {
        if (node.parent.kind === "let") {
          context.report({
            node,
            message: "let is not allowed",
            data: {
              let: node.parent.kind,
            },
          });
        }
      },
    };
  },
};
