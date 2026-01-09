import nextCoreWebVitals from "eslint-config-next/core-web-vitals.js";

export default [
  ...nextCoreWebVitals,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "react/react-in-jsx-scope": "off",
    },
  },
];
