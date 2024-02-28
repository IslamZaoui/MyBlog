import type { RequestHandler } from './$types';
import { componentToImageResponse } from '$lib/utils/OG';
import OG from '$lib/utils/OG/OG.svelte';

export const GET: RequestHandler = async ({ params }) => {
	return componentToImageResponse(OG, {
		text: params.text
	});
};
