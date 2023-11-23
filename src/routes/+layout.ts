import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { i18nObject } from 'typesafe-i18n';
import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
	await loadLocaleAsync(data.Lang);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	i18nObject(data.Lang);
	return {
		Lang: data.Lang,
		url: data.url
	};
}) satisfies LayoutLoad;
