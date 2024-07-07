module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "never"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
