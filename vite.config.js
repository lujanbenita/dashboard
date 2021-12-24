import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import viteStylelint from "@amatlash/vite-plugin-stylelint"
import StylelintPlugin from "vite-plugin-stylelint"

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "_jsx",
    jsxFragment: "_jsxFragment",
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  },
  plugins: [reactRefresh(), viteStylelint(), StylelintPlugin()],
})
