import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch,url }) => {
    try {
        const post = await import(`../../../../static/posts/${params.post}/index.svx`)
        const meta = post.metadata as Post

        const response = await fetch(`/API/views?path=${url.pathname}`)
        meta.views = await response.text() as unknown as number
        meta.slug = params.post
        
        return {
            content: post.default,
            meta
        };
    }
    catch (e) {
        throw error(404,`Could not find ${params.post}`)
    }
}) satisfies PageLoad;