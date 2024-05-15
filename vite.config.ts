import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Daily-Sync-TG-Web-App/",
  plugins: [react()],
})
