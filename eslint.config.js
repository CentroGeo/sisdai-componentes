import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/node_modules/**',
      '**/package.json',
      '**/package-lock.json',
      '**/dist/**',
      '**/dist-ssr/**',
      '**/docs/.vitepress/components/**',
      '**/docs/.vitepress/cache/**',
      '**/docs/.vitepress/src/**',
      '**/coverage/**',
      '**/confDep/**',
      '**/deprecated/**',
      '**/libs/**',
    ],
  },
  
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  skipFormatting,
]
