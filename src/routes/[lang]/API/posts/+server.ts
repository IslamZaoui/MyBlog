import type { RequestHandler } from './$types';
import * as p from 'path';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'nodejs18.x'
};

async function getPosts(pageNumber = 1, postsPerPage = 5, lang: string) {
	let posts: Post[] = [];

	let paths;
	if (lang === 'ar') paths = import.meta.glob(`/src/posts/**/ar.svx`, { eager: true });
	else paths = import.meta.glob(`/src/posts/**/en.svx`, { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = p.basename(p.dirname(path));

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	const startIndex = (pageNumber - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const paginatedPosts = posts.slice(startIndex, endIndex);

	const hasMorePosts = endIndex < posts.length;

	return {
		posts: paginatedPosts,
		hasMorePosts
	};
}

export const GET: RequestHandler = async ({ url, params }) => {
	const page = +(url.searchParams.get('page') ?? 1);
	const perPage = +(url.searchParams.get('perPage') ?? 5);
	const posts = await getPosts(page, perPage, params.lang);
	return new Response(JSON.stringify(posts), {
		headers: {
			'content-Type': 'application/json'
		}
	});
};
