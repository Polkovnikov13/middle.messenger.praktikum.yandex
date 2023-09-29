import {resolve} from 'path';
import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';


export default defineConfig({
    root: resolve(__dirname, ''),
    publicDir:resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
    plugins: [
        handlebars({}) as Plugin,
    ],
})



// export default {
//   plugins: [handlebars()],
// };