import config from '$lib/config'
/* eslint-disable @typescript-eslint/no-explicit-any */
export function serializeSchema(thing: any) {
    return `<script type="application/ld+json">${JSON.stringify(thing)}</script>`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PostData(meta: any, lang: string) {
    const Schema = {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${config.url}${lang}/posts/${meta.slug}`
        },
        "headline": meta.title,
        "description": meta.description,
        "image": {
            "@type": "ImageObject",
            "url": `${config.url}en/API/OG/${encodeURIComponent(meta.title)}`
        },
        "datePublished": new Date(meta.date).toISOString(),
        "dateModified": new Date(meta.date).toISOString(),
        "author": {
            "@type": "Person",
            "name": config.name,
            // Add additional author properties if available
        },
        "keywords": Array.isArray(meta.tags) ? meta.tags : [meta.tags],
        "url": `${config.url}${lang}/posts/${meta.slug}`
    };
    return Schema;
}

