import type { RequestHandler } from './$types';
import config from '$lib/config';

export const GET: RequestHandler = async ({ fetch, locals }) => {
	const ENposts = (
		await (
			await fetch(`/API/getPosts?lang=${locals.paraglide.lang}&isAllPosts=true&lang=en`)
		).json()
	).posts as Post[];
	const ARposts = (
		await (
			await fetch(`/API/getPosts?lang=${locals.paraglide.lang}&isAllPosts=true&lang=ar`)
		).json()
	).posts as Post[];

	const headers = { 'Content-Type': 'application/xml' };

	const pages = [
		'',
		'en',
		'ar',
		'posts',
		'en/posts',
		'ar/posts',
		'posts/all',
		'en/posts/all',
		'ar/posts/all',
		...ENposts.map((post) => 'posts/' + post.slug),
		...ENposts.map((post) => 'en/posts/' + post.slug),
		...ARposts.map((post) => 'ar/posts/' + post.slug)
	];

	const sitemap = `
	  <?xml version="1.0" encoding="UTF-8" ?>
	  <urlset
	    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	    xmlns:xhtml="https://www.w3.org/1999/xhtml"
	    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	  >
	    ${pages
				.map((page) => {
					return `
	          <url>
	            <loc>${config.url}${page}</loc>
	            <lastmod>${new Date().toISOString()}</lastmod>
	          </url>
	        `;
				})
				.join('')}
	  </urlset>
	`.trim();
	return new Response(sitemap, { headers });
};
