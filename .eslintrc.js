module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'no-unused-imports'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'warn',
    },
}
