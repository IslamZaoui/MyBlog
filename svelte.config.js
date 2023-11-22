import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import remarkUnwrapImages from 'remark-unwrap-images';
import { mdsvex } from 'mdsvex';

function isVideoURL(url) {
	const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm'];
	const urlParts = url.split('.');
	const extension = urlParts[urlParts.length - 1];

	return videoExtensions.includes(extension);
}

const isYouTubeURL = (url) => {
	const regex = /^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return regex.test(url);
};

const MyRemarkPlugin = () => {
	return (tree) => {
		const imageImports = [];
		let count = 0
		tree.children.forEach((child) => {
			if (child.type === 'image') {
				if (isVideoURL(child.url)) {
					const src = child.url;
					let alt = child.alt;
					if (alt.startsWith('$posts/') || alt.startsWith('$lib/')) {
						count++
						imageImports.push(`import image${count} from '${alt}?format=avif';`);
						alt = `{image${count}}`
					}
					if (child.url.startsWith('$posts/') || child.url.startsWith('$lib/')) {
						count++
						imageImports.push(`import video${count} from '${src}?format=avif';`);
						child.type = 'html';
						child.value = `<Video src={video${count}} type="video" poster=${alt} />`;
					} else {
						child.type = 'html';
						child.value = `<Video src="${src}" type="video" poster=${alt} />`;
					}

				} else
					if (child.url.startsWith('$posts/') || child.url.startsWith('$lib/')) {
						count++;
						const imageSrc = child.url;
						imageImports.push(`import image${count} from '${imageSrc}?format=avif';`);
						child.url = `{image${count}}`
						child.data = {
							hProperties: {
								class: 'mx-auto block',
							},
						};
					} else if (isYouTubeURL(child.url)) {
						const src = child.url;
						child.type = 'html';
						child.value = `<Video src="${src}" type="youtube" poster={undefined} />`;
					}
			}
		});
		const scriptNode = {
			type: 'html',
			value: `<script lang='ts'>\nimport { CodeBlock } from '@skeletonlabs/skeleton';\nimport Video from '$lib/Components/video/video.svelte'\n${imageImports.join('\n')}</script>`,
		};
		tree.children.unshift(scriptNode);
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
		MyRemarkPlugin
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
