import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import remarkUnwrapImages from 'remark-unwrap-images';
import { mdsvex } from 'mdsvex';

//add custom script to svx file before its compile to a component
function CustomScriptPlugin() {
	return (tree) => {
		// Construct the HTML AST node for the script
		const scriptNode = {
			type: 'html',
			value: "<script lang='ts'>\nimport { CodeBlock } from '@skeletonlabs/skeleton';\nimport Video from '$lib/Components/video/video.svelte'\n</script>",
		};

		// Insert the script at the beginning of the tree
		tree.children.unshift(scriptNode);
	};
}

const remarkCenterImagePlugin = () => {
	return (tree) => {
		tree.children.forEach((child) => {
			if (child.type === 'image') {
				// Add a CSS class to center the image
				child.data = {
					hProperties: {
						class: 'mx-auto block',
					},
				};
			}
		});
	};
};



function highlighter(code, lang) {
	return `<CodeBlock language="${lang}" code={\`${code}\`}></CodeBlock>`;
}

/**@type {import(mdsvex).mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	remarkPlugins: [
		remarkUnwrapImages,
		remarkCenterImagePlugin,
		CustomScriptPlugin
	],
	rehypePlugins: [],
	highlight: { highlighter }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter(),
		alias: {
			$i18n: 'src/i18n',
			$posts: 'src/posts'
		}
	}
};
export default config;
