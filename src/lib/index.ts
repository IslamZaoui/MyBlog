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

export function getPostImageURL(post: string, image: string): string {
	//https://github.com/IslamZaoui/MyBlog/blob/main/src/posts/test-page/attachments/cover.jpg?raw=true
	return `https://github.com/IslamZaoui/MyBlog/blob/main/src/posts/${post}/attachments/${image}?raw=true`
}