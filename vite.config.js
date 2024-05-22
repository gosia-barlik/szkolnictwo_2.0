import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_BACKEND": JSON.stringify('http://dev-api-kompas.ibe.edu.pl/api/v1/apigateway/')
  }
})
