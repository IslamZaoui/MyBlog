import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
    let views = 0

    // get views
    try {
        views = (await (await fetch(`/${params.lang}/API/views/${params.post}`, { method: 'get' })).json())
    } catch (_) { }

    return {
        views
    };

}) satisfies PageServerLoad;