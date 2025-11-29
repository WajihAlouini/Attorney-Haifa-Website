import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist/**", "node_modules/**", "build/**", "coverage/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Configuration for all source files
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn", // Changed to warning
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-rest-params": "warn", // Changed to warning
    },
  },

  // Relaxed rules for type definitions and third-party widget code
  {
    files: [
      "**/*.d.ts",
      "**/CalComWidget.tsx",
      "**/CookieConsent.tsx",
      "**/GoogleAnalytics.tsx",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-rest-params": "off",
    },
  }
);
