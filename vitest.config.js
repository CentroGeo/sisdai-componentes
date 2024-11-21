import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: 'v8', // istanbul, v8
      },
      reportsDirectory: './test/unit/coverage',
      // enable jest-like global test APIs
      globals: true,
      // simulate DOM with happy-dom
      // (requires installing happy-dom as a peer dependency)
      environment: 'happy-dom',
      // environment: 'jsdom',
      exclude: [
        ...configDefaults.exclude,
        'e2e/**',
        '**/{lint-staged, volar}.config.*',
      ],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
)
