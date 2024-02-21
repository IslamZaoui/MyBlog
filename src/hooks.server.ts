import { base } from '$app/paths';
import type { Locales } from '$i18n/i18n-types.js';
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util';
import { loadAllLocales } from '$i18n/i18n-util.sync';
import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { getPathnameWithoutBase } from './util.js';
import { sequence } from '@sveltejs/kit/hooks';

loadAllLocales();
const L = i18n();

const routes = ['en', 'ar', 'OG', 'sitemap.xml', 'API', 'src'];

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};

const LocalisationHook: Handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = getPathnameWithoutBase(event.url).split('/');

	// redirect to base locale if no locale slug was found
	if (!routes.includes(lang)) {
		const locale = getPreferredLocale(event);
		redirect(302, `${base}/${locale}`);
	}

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event);
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
};

const UserSessionHook: Handle = async ({ event, resolve }) => {
	let userID = event.cookies.get('userID');

	if (!userID) userID = crypto.randomUUID();

	event.locals.userID = userID;
	event.cookies.set('userID', userID, {
		secure: true,
		path: '/',
		sameSite: 'strict',
		expires: new Date('2025-01-01')
	});

	const response = await resolve(event);

	return response;
};

export const handle: Handle = sequence(LocalisationHook, UserSessionHook);
