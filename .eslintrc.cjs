/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:import/errors',
    'plugin:import/typescript'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.lint.json'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.lint.json'
      }
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: '@_models/**',
            group: 'internal'
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    'prettier/prettier': ['error'],

    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['methods']
      }
    ]
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true
      }
    }
  ]
};
