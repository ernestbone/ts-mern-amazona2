module.export = {
  env: {
    es2016: true,
    node: true,
  },
  extends: ['eslinty:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parser: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
}
