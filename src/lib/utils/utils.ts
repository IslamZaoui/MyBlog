import type { ComponentEvents } from 'svelte';
import type { AppShell, ModalSettings } from '@skeletonlabs/skeleton';
import appScroll from '../stores/appscroll';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, locales = 'en', dateStyle: DateStyle = 'medium') {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export const ScrollToTop = (way: 'smooth' | 'instant') => {
	const elemPage = document.querySelector('#page');
	if (elemPage !== null) {
		if (way === 'smooth') {
			elemPage.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		} else {
			elemPage.scrollTo(0, 0);
		}
	}
}

export function getCurrentYear(): number {
	const currentDate = new Date();
	return currentDate.getFullYear();
}

export function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	appScroll.update((value: number) => (value = event.currentTarget.scrollTop));
	maxappScroll.update((value: number) => (value = event.currentTarget.scrollHeight - 1000));
}

import { goto, preloadData, pushState } from '$app/navigation';
import Modal from '../Components/Modal';
import maxappScroll from '$lib/stores/maxappscroll';

export async function onShallowSearch(
	e: MouseEvent & { currentTarget: HTMLAnchorElement },
	modalStore: any,
	url: string
) {
	if (e.metaKey || e.ctrlKey || innerWidth < 640) return;
	e.preventDefault();

	if (url.includes('search')) return;

	const { href } = e.currentTarget;

	const result = await preloadData(href);

	if (result.type == 'loaded' && result.status == 200) {
		pushState(href, { selected: result.data });
		modalStore.trigger({
			type: 'component',
			component: {
				ref: Modal.ShallowSearch,
				props: { data: result.data }
			}
		});
	} else {
		goto(href);
	}
}

export async function onShallowSearchSC(modalStore: any, lang: string) {
	const href = `/${lang}/search`;
	const result = await preloadData(href);

	if (result.type == 'loaded' && result.status == 200) {
		pushState(href, { selected: result.data });
		modalStore.trigger({
			type: 'component',
			component: {
				ref: Modal.ShallowSearch,
				props: { data: result.data }
			}
		});
	} else {
		goto(href);
	}
}
