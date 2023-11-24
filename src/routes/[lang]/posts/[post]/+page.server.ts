import { env } from '$env/dynamic/private';
import { StatsUrl } from '$lib/config';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
    let views = "0"
    const response = await fetch(`${StatsUrl}api/v0/stats/hits`, {
        headers: {
            'content-type': "application/json",
            "Authorization": `Bearer ${env.GAOTCOUNTER_API_TOKEN}`
        }
    })
    if (response.ok) {
        const hit = (await response.json()).hits.filter((hit: any) => hit.path === url.pathname)
        if (hit.length === 1) {
            views = hit[0].count
        }
    }
    return {
        views
    };

}) satisfies PageServerLoad;