import type { Config } from '@sveltejs/adapter-vercel';
import type { RequestHandler } from './$types';
import utils from '$lib/utils';

export const config: Config = {
	runtime: 'nodejs18.x'
};

export const GET: RequestHandler = async ({ url }) => {
	const lang = (url.searchParams.get('lang')) ?? 'en';
	let posts = await utils.getPosts(lang);

	let hasMorePosts = false;

	const isAllPosts = (url.searchParams.get('isAllPosts') as unknown as boolean) ?? false;

	if (!isAllPosts) {
		const page = parseInt(url.searchParams.get('page') ?? '1');
		const perPage = parseInt(url.searchParams.get('perPage') ?? '10');
		[posts, hasMorePosts] = utils.postsPaginator(posts, page, perPage);
	}

	return new Response(
		JSON.stringify({
			posts,
			hasMorePosts
		}),
		{
			headers: {
				'content-Type': 'application/json'
			}
		}
	);
};
