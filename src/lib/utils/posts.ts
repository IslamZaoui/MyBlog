import type { Locales } from '$i18n/i18n-types';
import * as p from 'path';

export async function getPosts(lang: Locales = 'en'): Promise<Post[]> {
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

	return posts;
}

export function postsPaginator(posts: Post[], page: number, perPage: number): [Post[], boolean] {
	const start = (page - 1) * perPage;
	const end = start + perPage;
	const hasMorePosts = end < posts.length;
	return [posts.slice(start, end), hasMorePosts];
}
