import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  const isServe = command === 'serve';

  return {
    define: {
      [isServe ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      rollupOptions: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, '__dirname/index.html'),
        input: glob.sync('./src/*.html'),
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
