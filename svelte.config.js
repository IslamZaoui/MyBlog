import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig, searchAndReplaceEmbedings } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess(), searchAndReplaceEmbedings(), mdsvex(mdsvexConfig)],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter(),
		alias: {
			$paraglide: 'src/paraglide',
			$posts: 'src/posts',
			$asset: 'src/asset'
		}
	}
};
export default config;
