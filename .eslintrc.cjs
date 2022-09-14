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
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "error",
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
      },
    },
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-unused-vars": "error",
    "no-console": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
  },
  root: true,
}
