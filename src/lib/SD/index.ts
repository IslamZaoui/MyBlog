import * as config from '$lib/config'
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
            "@id": `"${config.url}${lang}/posts/${meta.slug}"`
        },
        "headline": meta.title,
        "description": meta.description,
        "image": {
            "@type": "ImageObject",
            "url": `${config.url}en/API/OG/${meta.title.replace(/ /g, '%20')}`,
        },
        "publisher": {
            "@type": "Organization",
            "name": config.name,
            "logo": {
                "@type": "ImageObject",
                "url": "https://islamzaoui.top/logo.png"
            }
        },
        "datePublished": meta.date,
        "dateModified": meta.date,
        "author": {
            "@type": "Person",
            "name": config.name
        },
        "keywords": meta.tags,
        "url": `${config.url}${lang}/posts/${meta.slug}`
    };
    return Schema;
}