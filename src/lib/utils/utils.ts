import type { ComponentEvents } from 'svelte';
import type { AppShell, ModalSettings } from '@skeletonlabs/skeleton';
import appScroll from '../stores/appscroll';

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

export function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	appScroll.update((value: number) => (value = event.currentTarget.scrollTop));
}
