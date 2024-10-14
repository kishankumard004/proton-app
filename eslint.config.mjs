import globals from "globals";
import pluginJs from "eslint-plugin-js"; // assuming 'pluginJs' is imported
import tsEslint from "@typescript-eslint/eslint-plugin"; // assuming 'tsEslint' is imported
import pluginReact from "eslint-plugin-react"; // assuming 'pluginReact' is imported
import prettier from "eslint-plugin-prettier"; // Prettier plugin
import configPrettier from "eslint-config-prettier"; // Prettier config
// Prettier config object
const prettierConfig = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "none",
  jsxBracketSameLine: true,
};
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Add Prettier plugin and config
  {
    plugins: {
      prettier, // Add Prettier as a plugin
    },
    rules: {
      "prettier/prettier": ["error", prettierConfig],
      // Catch and remove unused variables or lines
      "no-unused-vars": ["warn"], // Warn about unused variables
      "no-trailing-spaces": ["error"], // Disallow trailing whitespace at the end of lines
      "no-multiple-empty-lines": ["error", { max: 1 }], // Restrict multiple empty lines (max 1) // Enforce Prettier's rules as ESLint errors
    },
  },
  configPrettier, // Disable ESLint rules that conflict with Prettier
];
