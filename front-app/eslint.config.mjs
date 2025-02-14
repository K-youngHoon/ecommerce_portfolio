import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactPromise from "eslint-plugin-promise";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginReactImport from "eslint-plugin-import";
import eslintPluginReactNode from "eslint-plugin-node";
import eslintPluginReactPrettier from "eslint-plugin-prettier";
import eslintPluginJest from "eslint-plugin-jest";

export default tseslint.config(
  { configs: { ignores: ["dist", "node_modules"] } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [" ** / *. {js,jsx,ts,tsx}"],
    ...eslintPluginJest.configs["flat/recommended"],
    LanguageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      promise: eslintPluginReactPromise,
      import: eslintPluginReactImport,
      node: eslintPluginReactNode,
      prettier: eslintPluginReactPrettier,
    },
    rules: {
      semi: ["error", "never"],
      indent: ["error", 2],
      ...eslintPluginJest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "no-unused-vars": "warn",
      "no-console": "warn",
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",

      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/no-duplicates": "warn",

      "node/no-missing-import": "error",
      "node/no-extraneous-import": "warn",

      "prettier/prettier": ["error", { singleQuote: true, semi: false }],

      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
    },
  }
);
