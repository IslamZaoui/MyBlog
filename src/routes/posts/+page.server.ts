import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url, depends, locals }) => {
	depends('data:posts');

	const page = +(url.searchParams.get('page') ?? 1);
	const perPage = +(url.searchParams.get('perPage') ?? 10);

	const response = await fetch(`/API/getPosts?lang=${locals.paraglide.lang}&page=${page}&perPage=${perPage}`);

	const { posts, hasMorePosts } = (await response.json()) as {
		posts: Post[];
		hasMorePosts: boolean;
	};

	return {
		posts,
		hasMorePosts,
		page
	};
}) satisfies PageServerLoad;
