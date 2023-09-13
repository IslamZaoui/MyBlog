import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url, depends,params }) => {

    depends('data:posts')

    const page = +(url.searchParams.get('page') ?? 1)
    const perPage = +(url.searchParams.get('perPage') ?? 5)

    const response = await fetch(`/${params.lang}/API/posts?page=${page}&perPage=${perPage}`)

    const {posts,hasMorePosts} = await response.json()

    return {
        posts,
        hasMorePosts,
        page
    }
}) satisfies PageServerLoad;