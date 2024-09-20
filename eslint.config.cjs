module.exports = [
  {
    ...require('eslint-config-love'),
    files: ['**/*.js', '**/*.ts'],
    "rules": {
      "no-magic-numbers": "off"
    }
  },
]