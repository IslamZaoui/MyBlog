import { preloadData, pushState, goto } from '$app/navigation';
import type { ComponentEvents } from 'svelte';
import ShallowModal from './Components/Modals/shallowModal.svelte';
import type { AppShell } from '@skeletonlabs/skeleton';
import appScroll from './stores/appscroll';
import type { Locales } from '$i18n/i18n-types';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, locales = 'en', dateStyle: DateStyle = 'medium') {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export const ScrollToTop = (way: 'smooth' | 'instant') =>
	document.getElementById('top')?.scrollIntoView({
		behavior: way,
		block: 'start',
		inline: 'start'
	});

export function getCurrentYear(): number {
	const currentDate = new Date();
	return currentDate.getFullYear();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function onShallow(e: MouseEvent & { currentTarget: HTMLAnchorElement }, modalStore: any, component: any) {
	if (e.metaKey || e.ctrlKey) return
	e.preventDefault();

	const { href } = e.currentTarget;

	const result = await preloadData(href);

	if (result.type === 'loaded' && result.status === 200) {
		pushState(href, { selected: result.data });
		modalStore.trigger({
			type: 'component',
			component: {
				ref: ShallowModal,
				props: { data: result.data, component: component }
			}
		})
	} else {
		goto(href);
	}
}

export function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	appScroll.update(value => value = event.currentTarget.scrollTop)
}

export async function getPostViews(slug: string, lang: Locales) {
	let views = 0
	try {
		views = (await (await fetch(`/${lang}/API/views/${slug}`, { method: 'get' })).json())
	} catch (_) { }
	return views
}

export async function increasePostViews(slug: string, lang: string) {
	try {
		await fetch(`/${lang}/API/views/${slug}`, { method: 'post' })
	} catch (_) { }
}