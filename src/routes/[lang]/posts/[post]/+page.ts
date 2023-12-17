import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, data }) => {
	try {
		const post = await import(`./../../../../posts/${params.post}/${params.lang}.svx`);
		const meta = post.metadata as Post;
		meta.views = data.views;
		meta.slug = params.post;

		return {
			content: post.default,
			meta
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find ${params.post}`);
	}
}) satisfies PageLoad;
