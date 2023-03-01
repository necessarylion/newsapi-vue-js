module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential', 
    'airbnb-base', 
    'plugin:vuetify/base', 
    'plugin:import/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved' : 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
