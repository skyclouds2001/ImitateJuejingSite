module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:jsdoc/recommended', 'plugin:jsx-a11y/recommended', 'plugin:security/recommended', 'plugin:markdown/recommended', 'plugin:json/recommended', 'plugin:prettier/recommended'],
  plugins: ['html'],
  rules: {
    'n/no-missing-import': 'off',
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react', 'plugin:playwright/playwright-test'],
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
}
