/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-magic-numbers */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'test'
      ]
    ]
  }
};
