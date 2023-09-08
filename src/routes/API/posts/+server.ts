import type { RequestHandler } from './$types';
import * as p from 'path';

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })
	for (const path in paths) {
		const file = paths[path]
		const slug = p.basename(p.dirname(path))

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return new Response(JSON.stringify(posts),{
		headers:{
			'content-Type':'application/json'
		}
	});
};