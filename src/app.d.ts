declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}
declare module '@fortawesome/pro-regular-svg-icons/index.es' {
	export * from '@fortawesome/pro-regular-svg-icons';
}

declare global {
	namespace App {
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
			userID: string
		}
		interface PageData {
			url: string
			Lang: Locales
		}
		interface Error {
			details?: string
		}
		// interface Platform {}
	}

	interface Window {
		dataLayer: IArguments[];

		/* eslint-disable @typescript-eslint/no-explicit-any */
		gtag?: (...args: any[]) => void;
	}
}

export { };
