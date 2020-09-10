module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.json'
      }
    }
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
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
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

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
      files: ['.eslintrc.js'],
      env: {
        node: true
      }
    }
  ]
};
