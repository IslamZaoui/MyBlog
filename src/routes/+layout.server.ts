import type { LayoutServerLoad } from './$types'

export const load = (async ({url,locals}) => {
    return {
        url:url.pathname,
        Lang:locals.locale
    };
}) satisfies LayoutServerLoad;