import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				greedy: [/^hljs-/],
			},
		}),
		imagetools(),
		SvelteKitPWA({
			srcDir: './src',
			mode: 'production',
			strategies: 'injectManifest',
			filename: 'sw.ts',
			scope: '/',
			base: '/',
			injectManifest: {
				globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
			},
			devOptions: {
				enabled: true,
				type: 'module',
				navigateFallback: '/'
			},
			kit: {}
		})],
	server: {
		fs: {
			allow: ['./static']
		}
	}
});
