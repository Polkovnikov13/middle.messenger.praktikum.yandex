import {resolve} from 'path';
import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';
import copy from 'rollup-plugin-copy';


export default defineConfig({
    root: resolve(__dirname, 'src'),
    publicDir:resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
    plugins: [
    copy({
      targets: [
        { src: 'src/assets/avatars', dest: 'dist/images' }, 
      ],
    }),
        handlebars() as Plugin,
    ],
})
