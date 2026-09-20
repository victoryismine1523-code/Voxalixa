import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    // Split vendors out so the app chunk stays small and browser caching
    // actually works between deploys. Path-based (not name-based) so that
    // React doesn't get swallowed into the antd chunk — antd imports React,
    // and name-based manualChunks assigns by first match.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const p = id.replace(/\\/g, '/')
          // React first — antd imports it, and assigning by first match keeps
          // React out of the antd chunk.
          if (/node_modules\/(react|react-dom|scheduler)\//.test(p)) return 'vendor-react'
          // Everything else from node_modules (antd, rc-*, icons) in one chunk.
          // Keeping it as a single chunk avoids antd <-> rc-* circular chunks.
          return 'vendor-antd'
        }
      }
    },
    // antd is large by nature; we've split it deliberately, so raise the warning limit
    chunkSizeWarningLimit: 900
  }
})