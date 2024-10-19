import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

import eslintConfigPrettier from 'eslint-config-prettier'

import html from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'

export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  {
    ignores: [
      '**/node_modules',
      '**/package.json',
      '**/package-lock.json',
      '.git',
      '**/dist',
      'docs/.vuepress/dist',
      'docs/.vitepress/dist',
      'docs/.vitepress/cache',
      '**/coverage',
      '**/libs',
      '**/deprecated',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        globalThis: 'readonly',
      },
      parser: htmlParser,
    },
  },
  {
    plugins: {
      '@html-eslint': html,
    },
  },
  {
    rules: {
      eqeqeq: 'error',
      'no-new': 0,
      'no-console': 'off',
      'no-debugger': 'off',
      // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Layout', 'basico', 'default'],
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
]
