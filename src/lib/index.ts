import { preloadData, pushState, goto } from '$app/navigation';
import ShallowModal from './Components/Modals/shallowModal.svelte';

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
			//response: () => history.back(),
			component: {
				ref: ShallowModal,
				props: { data: result.data, component: component }
			}
		})
	} else {
		goto(href);
	}
}