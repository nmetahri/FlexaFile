import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import * as tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: [
      "**/dist",
      "**/.eslintrc.cjs",
      "app/**/*.test.{js,ts,tsx}",
      "app/__tests__/**",
      "app/vite-env.d.ts",
      "./*.config.*",
      "./.react-router/types/**",
      "**/node_modules/**"
    ]
  },

  ...tseslint.configs.stylisticTypeChecked,

  {
    plugins: {
      "@typescript-eslint": tsPlugin,
      "no-relative-import-paths": noRelativeImportPaths,
      react: reactPlugin,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname
      },
      globals: {
        ...globals.browser
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },

    settings: {
      react: { version: "detect" }
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      "prettier/prettier": "error",

      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        { allowSameFolder: true }
      ]
    }
  },

  prettierConfig
];
