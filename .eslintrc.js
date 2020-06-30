module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  globals: {
    process: 'readonly',
  },
}
