import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, data }) => {
	try {
		const post = await import(`./../../../posts/${params.post}/${data.lang}.md`);
		const meta = post.metadata as Post;
		meta.views = data.views.toLocaleString();
		meta.slug = params.post;

		return {
			content: post.default,
			meta,
			posts: data.posts
		};
	} catch (e) {
		error(404, {
			message: `Could not find ${params.post}`,
			details: (e as Error).message
		});
	}
}) satisfies PageLoad;
