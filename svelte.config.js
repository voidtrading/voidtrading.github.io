import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    preprocess: [vitePreprocess()],
    kit: {
        appDir: 'app',
        adapter: adapter(),
        // paths: {
        //     base: process.env.NODE_ENV === 'production' ? '/voidtrading.github.io' : ''
        // }
  },
};