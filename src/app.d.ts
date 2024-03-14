declare global {
	namespace App {
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
			userID: string;
		}
		interface PageData {
			url: string;
			Lang: Locales;
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
}

export {};
