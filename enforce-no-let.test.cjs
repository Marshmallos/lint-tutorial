const RuleTest = require("eslint");
const enforceNoLet = require("./enforce-no-let.cjs");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2022 },
});

ruleTester.run("enforce-no-let", enforceNoLet, {
  valid: [
    {
      code: "const foo = 'bar';",
    },
  ],
  invalid: [
    {
      code: "let foo = 'bar';",
      output: "let foo = 'bar';",
      errors: 1,
    },
  ],
});

console.log("All test passed");
