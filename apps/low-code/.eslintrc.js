/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@antfu'],
  rules: {
    semi: [2, 'never'],
  },
  ignorePatterns: ['*.json'],
}
