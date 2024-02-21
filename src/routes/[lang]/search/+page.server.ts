import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/API/getPosts?isAllPosts=true`);
	const { posts } = (await response.json()) as { posts: Post[] };
	return {
		posts
	};
}) satisfies PageServerLoad;
