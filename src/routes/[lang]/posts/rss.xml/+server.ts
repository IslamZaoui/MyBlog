import { formatDate } from '$lib';
import * as config from '$lib/config';

export async function GET({ fetch, params }) {
	const response = await fetch(`/${params.lang}/API/getPosts?page=${1}&perPage=${100}`);
	const posts = (await response.json()).posts as Post[];
	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}${params.lang}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}${params.lang}/posts/${post.slug}</link>
							<tags>${post.tags}</tags>
							<guid isPermaLink="true">${config.url}${params.lang}/posts/${post.slug}</guid>
							<pubDate>${formatDate(post.date)}</pubDate>
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
