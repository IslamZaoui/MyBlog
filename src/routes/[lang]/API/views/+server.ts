import type { RequestHandler } from './$types';
import { parseHTML } from 'linkedom';

export const GET: RequestHandler = async (event) => {
	const path = event.url.searchParams.get('path');
	const html = await GetData();
	if (html && path) {
		const views = parseData(html, path);
		if (views) {
			return new Response(views);
		} else {
			return new Response(JSON.stringify(0));
		}
	} else {
		return new Response(JSON.stringify(0));
	}
};

async function GetData() {
	const api = `https://islamzaoui.goatcounter.com/?hl-period=year&period-start=2023-09-05&period-end=2025-09-05&filter=&daily=off`;
	const response = await fetch(api);

	if (!response.ok) {
		return undefined;
	}

	return (await response.text()) as string;
}

function parseData(html: string, path: string) {
	const { document } = parseHTML(html);
	const trElement = document.querySelector(`tr[id="${path}"]`);
	const viewsElement = trElement?.querySelector('td.col-count span');
	const views = viewsElement?.textContent?.trim();
	return views;
}
