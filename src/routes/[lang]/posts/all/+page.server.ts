import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const response = await fetch(`/API/getPosts?lang=${params.lang}&isAllPosts=true`);
	const { posts } = (await response.json()) as { posts: Post[] };

	return {
		posts,
	};
}) satisfies PageServerLoad;
