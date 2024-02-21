import { visit } from 'unist-util-visit';

function isVideoURL(url) {
	const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'ogg'];
	const urlParts = url.split('.');
	const extension = urlParts[urlParts.length - 1].toLowerCase();
	return videoExtensions.includes(extension);
}

function isYoutubeUrl(url) {
	const regex = /^https?:\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|v\/)?(.+)$/;
	const match = url.match(regex);
	const videoId = match ? match[1] : null;
	return {
		status: !!match,
		videoId
	};
}

export default function videosPlugin() {
	return function transformer(tree) {
		visit(tree, 'image', (node) => {
			if (isVideoURL(node.url)) {
				node.type = 'html';
				node.value = `<Video src="${node.url}" />`;
			} else {
				const { status, videoId } = isYoutubeUrl(node.url);
				if (status) {
					node.type = 'html';
					node.value = `<Youtube id="${videoId}" />`;
				}
			}
		});
	};
}
