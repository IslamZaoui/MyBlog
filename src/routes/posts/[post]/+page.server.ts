import utils from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch, locals }) => {
	let views = 0;

	// get views
	try {
		views = await (await fetch(`/API/views/${params.post}`, { method: 'get' })).json();
	} catch (_) {}

	const posts = await utils.getNextAndPreviousPosts(params.post, locals.paraglide.lang);

	return {
		views,
		posts,
		lang: locals.paraglide.lang
	};
}) satisfies PageServerLoad;
