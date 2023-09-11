import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    const response = await fetch('/API/posts')
    const posts = (await response.json()).posts as Post[]
    return { posts }
}) satisfies PageServerLoad;