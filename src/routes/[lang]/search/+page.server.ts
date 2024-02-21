import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const response = await fetch(`/API/getPosts?isAllPosts=true&lang=${params.lang}`);
	const { posts } = (await response.json()) as { posts: Post[] };
	return {
		posts
	};
}) satisfies PageServerLoad;
