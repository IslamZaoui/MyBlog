<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import utils from '$lib/utils';
	import { fade } from 'svelte/transition';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', utils.replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			utils.replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<div class="hover:dark:text-tertiary-500 hover:text-tertiary-800">
	{#key $locale}
		<div in:fade>
			{#if $locale === 'ar'}
				<a
					aria-label="English route"
					href={utils.replaceLocaleInUrl($page.url, 'en')}
					rel="alternate"
					hreflang="en">EN</a
				>
			{:else}
				<a
					aria-label="Arabic route"
					href={utils.replaceLocaleInUrl($page.url, 'ar')}
					rel="alternate"
					hreflang="ar">AR</a
				>
			{/if}
		</div>
	{/key}
</div>
