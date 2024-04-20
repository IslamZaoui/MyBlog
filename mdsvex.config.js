import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkUnwrapImages from 'remark-unwrap-images';
import readingTime from 'mdsvex-reading-time';
import relativeImages from './mdsvex/mdsvex-relative-images.js';
import remarkGfm from 'remark-gfm';

const imports = [
	"import { CodeBlock } from '@skeletonlabs/skeleton';",
	"import Video from '$lib/Components/ui/video/video.svelte';",
	"import Youtube from 'svelte-youtube-embed';"
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
	return `<CodeBlock language="${lang}" code={\`${code}\`} lineNumbers />`;
}

export const mdsvexConfig = defineConfig({
	extensions: ['.svx', '.md'],
	remarkPlugins: [
		readingTime,
		remarkUnwrapImages,
		remarkGfm,
		customImports,
		relativeImages,
	],
	rehypePlugins: [],
	highlight: { highlighter }
});

export function searchAndReplaceEmbedings() {
	return {
		markup: ({ content }) => {
			const embed = /{% embed src="(.*?)" title="(.*?)" %}/g;
			const video = /{% video src="(.*?)"(?: poster="(.*?)")? %}/g;
			const image = /{% img src="(.*?)" alt="(.*?)" %}/g;
			const youtube = /{% youtube id="(.*?)" %}/g;

			const newContent = content
				.replace(embed, (_, src, title) => `<iframe title="${title}" src="${src}" loading="lazy"></iframe>`)
				.replace(video, (_, src) => `<Video src="${src}" />`)
				.replace(image, (_, src, alt) => `<img src="${src}" alt="${alt}" loading="lazy"/>`)
				.replace(youtube, (_, id) => `<div class="py-2"><Youtube class="aspect-video" id="${id}" /></div>`);

			return { code: newContent };
		}
	};
}