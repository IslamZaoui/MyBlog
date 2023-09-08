import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    const response = await fetch('/API/projects')
    const repos: Repository[] = await response.json()
    return { repos }
}) satisfies PageServerLoad;