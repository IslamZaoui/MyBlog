import type { RequestHandler } from './$types';
import { componentToImageResponse } from '$lib/OG';
import OG from '$lib/OG/OG.svelte';

export const GET: RequestHandler = async ({ params }) => {
	return componentToImageResponse(OG, {
		text: params.text
	});
};
