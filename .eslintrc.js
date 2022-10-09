module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [1,
      { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 'warn',
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'max-len': ['error', { ignoreComments: true }],
    'linebreak-style': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
