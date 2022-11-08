module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'max-len': ['error', { code: 150 }],
    'import/extensions': ['error', {
      js: 'always',
    }],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
      ],
      rules: {
        'no-console': 'off',
        'max-len': ['error', { code: 150 }],
        'import/extensions': ['error', {
          js: 'always',
          ts: 'always',
        }],
      },
    },
  ],
};
