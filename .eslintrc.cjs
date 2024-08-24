/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
   root: true,
   'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-prettier/skip-formatting'
   ],
   parserOptions: {
      ecmaVersion: 'latest'
   },
   // add your custom rules here
   // rules: {
   //   'vue/multi-word-component-names': 'off',  // we permit single word component names
   // }
}
