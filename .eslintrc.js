module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    page: true,
    window: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    /** [off]: React 17 不再需要声明React */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
