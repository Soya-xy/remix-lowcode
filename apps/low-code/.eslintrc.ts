/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@antfu',

    'plugin:react-hooks/recommended',
  ],
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['*.json'],
}
