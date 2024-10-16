import globals from "globals";
import pluginJs from "eslint-plugin-js"; // assuming 'pluginJs' is imported
import tsEslint from "@typescript-eslint/eslint-plugin"; // assuming 'tsEslint' is imported
import pluginReact from "eslint-plugin-react"; // assuming 'pluginReact' is imported
import prettier from "eslint-plugin-prettier"; // Prettier plugin
import configPrettier from "eslint-config-prettier"; // Prettier config
// Prettier config object
const prettierConfig = {
  semi: true,              // Use semicolons at the end of statements (true = yes, false = no)
  tabWidth: 2,             // Set the number of spaces per tab
  useTabs: false,          // Indent using spaces (false = spaces, true = tabs)
  singleQuote: true,       // Use single quotes instead of double quotes
  jsxSingleQuote: false,   // Use double quotes in JSX attributes
  trailingComma: "none",   // Do not print trailing commas (options: 'es5', 'none', 'all')
  bracketSpacing: true,    // Print spaces between brackets in object literals (true = yes, false = no)
  jsxBracketSameLine: true,// Keep the JSX closing bracket on the same line as the last prop
  arrowParens: "avoid", 
  htmlWhitespaceSensitivity: "strict",
  printWidth: 80   // Omit parentheses when they are not required in arrow functions 
       }       // Wrap lines at 100 characters
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
      "eslint":recommended, // Add this line to integrate Prettier with ESLint
      "prettier/prettier": ["error", prettierConfig],
      // Catch and remove unused variables or lines
      "no-unused-vars": ["warn"], // Warn about unused variables
      "no-trailing-spaces": ["error"], // Disallow trailing whitespace at the end of lines
      "no-multiple-empty-lines": ["error", { max: 1 }], // Restrict multiple empty lines (max 1) // Enforce Prettier's rules as ESLint errors
    },
  },
  configPrettier, // Disable ESLint rules that conflict with Prettier
];
