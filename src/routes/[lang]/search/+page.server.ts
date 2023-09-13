import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const response = await fetch(`/${params.lang}/API/posts`)
    const posts = (await response.json()).posts as Post[]
    return { posts }
}) satisfies PageServerLoad;