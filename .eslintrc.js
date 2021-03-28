module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    page: true,
    window: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    /** [off]: React 17 不再需要声明React */
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
};
