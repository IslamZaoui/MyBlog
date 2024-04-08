import { defineConfig } from 'vite';
import remarkUnwrapImages from 'remark-unwrap-images';
import readingTime from 'mdsvex-reading-time';
import relativeImages from './mdsvex/mdsvex-relative-images.js';
import remarkGfm from 'remark-gfm';
import videosPlugin from './mdsvex/videoPlugin.js';

const imports = [
	"import { CodeBlock } from '@skeletonlabs/skeleton';",
	"import Video from '$lib/Components/ui/video/video.svelte';",
	"import Youtube from '$lib/Components/ui/video/Youtube.svelte';"
];
const customImports = () => {
	return (tree) => {
		const scriptNode = {
			type: 'html',
			value: `<script context="module" lang="ts">
				${imports.join('\n')}
			</script>`
		};
		tree.children.unshift(scriptNode);
	};
};

function highlighter(code, lang) {
	return `<CodeBlock language="${lang}" code={\`${code}\`} lineNumbers ></CodeBlock>`;
}

export const mdsvexConfig = defineConfig({
	extensions: ['.svx', '.md'],
	remarkPlugins: [
		remarkUnwrapImages,
		remarkGfm,
		customImports,
		relativeImages,
		videosPlugin,
		readingTime
	],
	rehypePlugins: [],
	highlight: { highlighter }
});
