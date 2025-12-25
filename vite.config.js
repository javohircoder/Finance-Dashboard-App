import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessors: {
            scss: {
                additionalData:
                    `@use "./styles/utils/_variables" as *;
                     @use './styles/utils/_mixins' as *;`
            }
        }
    }
})
