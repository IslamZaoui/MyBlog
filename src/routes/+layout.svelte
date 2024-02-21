<script lang="ts">
	import config from '$lib/config';

	import { setLocale } from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';
	export let data;

	loadAllLocales();
	// @ts-ignore
	i18n($locale);
	setLocale(data.Lang);

	import '../app.postcss';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/tomorrow-night-bright.css';
	import { Modal, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// @ts-ignore
	import { gsap } from 'gsap/dist/gsap';
	// @ts-ignore
	import { Flip } from 'gsap/dist/Flip';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { loadAllLocales } from '$i18n/i18n-util.sync';
	import { i18n } from 'typesafe-i18n';
	import type { AfterNavigate } from '@sveltejs/kit';

	gsap.registerPlugin(Flip);

	let state: Flip.FlipState;

	beforeNavigate(async () => {
		state = await Flip.getState('.postTitle, .postTags, .postDetails, .navA');
	});

	afterNavigate(async (params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		await Flip.from(state, {
			targets: '.postTitle, .postTags, .postDetails, .navA',
			duration: 0.3,
			scale: true,
			ease: 'power1.easeOut'
		});
	});
</script>

<Modal />

<svelte:head>
	<link rel="canonical" href="{config.url}{data.url.replace('/', '')}" />
</svelte:head>

<slot />
