module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "standard-with-typescript",
        "prettier",
      ],

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
  },
  root: true,
}
