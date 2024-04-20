/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface PageData {
		url: string;
	}
	interface Error {
		details?: string;
	}
	// interface Platform {}
}

interface Window {
	dataLayer: IArguments[];
	gtag?: (...args: any[]) => void;
}

declare module 'mdsvex-reading-time';
declare module 'lite-youtube-embed';
