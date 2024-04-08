import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, locals }) => {
	const response = await fetch(`/API/getPosts?lang=${locals.paraglide.lang}&isAllPosts=true`);
	const { posts } = (await response.json()) as { posts: Post[] };
	return {
		posts
	};
}) satisfies PageServerLoad;
