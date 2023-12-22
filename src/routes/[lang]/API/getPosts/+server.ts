import * as p from 'path';
import type { Config } from '@sveltejs/adapter-vercel';
import type { RequestHandler } from './$types';

export const config: Config = {
    runtime: 'nodejs18.x'
};

async function getPosts(pageNumber = 1, postsPerPage = 5, lang = "en") {
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

async function searchPosts(searchString: string, posts: Post[]) {
    const normalizedSearchString = searchString.toLowerCase();

    return normalizedSearchString.length > 0 ? posts.filter((post) => {
        return (
            post.title.toLowerCase().includes(normalizedSearchString) ||
            post.description.toLowerCase().includes(normalizedSearchString) ||
            post.tags.some((tag) => tag.toLowerCase().includes(normalizedSearchString))
        );
    }) : [];
}


export const GET: RequestHandler = async ({ url, params }) => {
    const page = +(url.searchParams.get('page') ?? 1);
    const perPage = +(url.searchParams.get('perPage') ?? 5);
    const search = url.searchParams.get('search') === 'true'
    const filter: string = url.searchParams.get('filter') ?? ''
    const posts = await getPosts(page, perPage, params.lang ?? undefined);

    if (search) {
        posts.posts = await searchPosts(filter, posts.posts)
        posts.hasMorePosts = false;
    }
    return new Response(JSON.stringify(posts), {
        headers: {
            'content-Type': 'application/json'
        }
    });
};
