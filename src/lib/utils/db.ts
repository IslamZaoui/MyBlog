export async function getPostViews(slug: string) {
	let views = 0;
	try {
		views = await (await fetch(`/API/views/${slug}`, { method: 'get' })).json();
	} catch (_) {}
	return views;
}

export async function increasePostViews(slug: string) {
	try {
		await fetch(`/API/views/${slug}`, { method: 'post' });
	} catch (_) {}
}
