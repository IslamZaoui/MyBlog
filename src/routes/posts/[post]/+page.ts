import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    try {
        const post = await import(`../../../posts/${params.post}/index.md`)
        return {
            content: post.default,
            meta: post.metadata
        };
    }
    catch (e) {
        throw error(404,`Could not find ${params.post}`)
    }
}) satisfies PageLoad;