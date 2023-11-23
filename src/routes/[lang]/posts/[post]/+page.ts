import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const post = await import(`./../../../../posts/${params.post}/${params.lang}.svx`);
		const meta = post.metadata as Post;
		meta.slug = params.post;

		return {
			content: post.default,
			meta
		};
	} catch (e) {
		console.log(e);
		throw error(404, `Could not find ${params.post}`);
	}
}) satisfies PageLoad;
