import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { mdsvex } from 'mdsvex';

/**@type {import(mdsvex).mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		alias: {
			$i18n: 'src/i18n'
		}
	}
};
export default config;
