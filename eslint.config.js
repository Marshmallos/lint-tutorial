"use strict";
/**
 * FlatCompat is required to make cjs packages compaitable with the new eslint flat config
 */
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("plugin:@typescript-eslint/recommended").map((config) => ({
    ...config,
    files: ["**/src/*.js", "**/src/*.ts", "**/src/*.tsx"],
  })),
  ...compat.extends("plugin:react-hooks/recommended").map((config) => ({
    ...config,
    files: ["**/src/*.js", "**/src/*.ts", "**/src/*.tsx"],
  })),
  ...compat.extends("fbjs").map((config) => ({
    ...config,
    files: ["**/src/*.js", "**/src/*.ts", "**/src/*.tsx"],
  })),
  {
    ...js.configs.recommended,
    languageOptions: {
      sourceType: "module",
      parser: tsParser,
      ecmaVersion: "latest",
    },
    plugins: { reactRefresh },
    rules: {
      "reactRefresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
];
