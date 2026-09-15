import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// ponytail: tailwind v4 uses vite plugin, not postcss
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
