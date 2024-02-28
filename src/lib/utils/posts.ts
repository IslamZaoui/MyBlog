import type { Locales } from '$i18n/i18n-types';
import * as p from 'path';

export async function getPosts(lang: Locales = 'en'): Promise<Post[]> {
	let posts: Post[] = [];

	let paths;
	if (lang === 'ar') paths = import.meta.glob(`/src/posts/**/ar.md`, { eager: true });
	else paths = import.meta.glob(`/src/posts/**/en.md`, { eager: true });

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

export function getGithubPostURL(slug: string, lang: Locales) {
	return `https://github.com/IslamZaoui/MyBlog/blob/main/src/posts/${slug}/${lang}.md` as const
}

export async function getNextAndPreviousPosts(slug: string, lang: Locales = 'en'): Promise<{ next: Post | null, previous: Post | null }> {
	const posts = await getPosts(lang);
	const index = posts.findIndex(post => post.slug === slug);

	const nextPost = index > 0 ? posts[index - 1] : null;
	const previousPost = index < posts.length - 1 ? posts[index + 1] : null;

	return { next: nextPost, previous: previousPost };
} 

export async function getPostViews(slug: string) {
	let views = 0;
	try {
		views = await (await fetch(`/API/views/${slug}`, { method: 'get' })).json();
	} catch (_) {}
	return views;
}

export async function increasePostViews(slug: string) {
	try {
		await fetch(`/API/views/${slug}`, { method: 'post' });
	} catch (_) {}
}
