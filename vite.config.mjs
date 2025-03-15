import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig} from 'vitest'

export default defineConfig({
  plugins: [tsconfigPaths()]
}
)