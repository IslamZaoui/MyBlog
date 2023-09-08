import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    const response = await fetch('/API/posts')
    const posts: Post[] = await response.json()
    return { posts }
}) satisfies PageServerLoad;