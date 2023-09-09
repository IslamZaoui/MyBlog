import type { LayoutLoad } from './$types';

export const prerender = true

export const load = (async ({data}) => {
    return {
        url:data.url
    };
}) satisfies LayoutLoad;