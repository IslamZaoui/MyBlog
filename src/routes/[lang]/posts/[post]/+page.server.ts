import type { Locales } from '$i18n/i18n-types';
import utils from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	let views = 0;

	// get views
	try {
		views = await (await fetch(`/API/views/${params.post}`, { method: 'get' })).json();
	} catch (_) { }

	const posts = await utils.getNextAndPreviousPosts(params.post, params.lang as Locales);

	return {
		views,
		posts
	};
}) satisfies PageServerLoad;
