import config from '$lib/config';

export async function GET({ fetch, locals }) {
	const response = await fetch(`/API/getPosts?lang=${locals.paraglide.lang}&isAllPosts=true`);
	const posts = (await response.json()).posts as Post[];
	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.name}</title>
				<description>${config.Sitedescription}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}${locals.paraglide.lang}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}${locals.paraglide.lang}/posts/${post.slug}</link>
							<guid isPermaLink="true">${config.url}${locals.paraglide.lang}/posts/${post.slug}</guid>
							<pubDate>${post.date}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
