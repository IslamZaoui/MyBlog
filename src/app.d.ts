declare global {
	namespace App {
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
}

export {};
