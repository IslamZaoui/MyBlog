import { goto, preloadData, pushState } from '$app/navigation';
import Modal from '../Components/Modal';

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
