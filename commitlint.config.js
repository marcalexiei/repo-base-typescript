module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test']],
    'scope-enum': [2, 'always', ['db', 'server', 'editor', 'template', 'lint']]
  }
};
