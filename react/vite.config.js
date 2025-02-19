import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

console.log(process.env.PORT)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173,
  },
  plugins: [react()],
})
