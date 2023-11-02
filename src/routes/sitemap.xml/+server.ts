import type { RequestHandler } from './$types';
import * as config from '$lib/config'

export const GET: RequestHandler = async ({ fetch }) => {
    const ENposts = (await (await fetch(`/en/API/getPosts?page=${1}&perPage=${100}`)).json()).posts as Post[];
	const ARposts = (await (await fetch(`/ar/API/getPosts?page=${1}&perPage=${100}`)).json()).posts as Post[];


    const headers = { 'Content-Type': 'application/xml' }

    const pages = [
        'en',
        'ar',
        'en/posts',
        'ar/posts',
        ...ENposts.map((post) => "en/posts/"+post.slug),
		...ARposts.map((post) => "ar/posts/"+post.slug),
    ]

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
	        `
            })
            .join('')}
	  </urlset>
	`.trim()
    return new Response(sitemap, { headers })
}