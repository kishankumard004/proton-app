import globals from "globals";
import pluginJs from 'eslint-plugin-js'; // assuming 'pluginJs' is imported
import tsEslint from '@typescript-eslint/eslint-plugin'; // assuming 'tsEslint' is imported
import pluginReact from 'eslint-plugin-react'; // assuming 'pluginReact' is imported
import prettier from 'eslint-plugin-prettier'; // Prettier plugin
import configPrettier from 'eslint-config-prettier'; // Prettier config

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
      'prettier/prettier': 'error', // Enforce Prettier's rules as ESLint errors
    },
  },
  configPrettier, // Disable ESLint rules that conflict with Prettier
];
