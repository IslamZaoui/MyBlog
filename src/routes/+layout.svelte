<script lang="ts">
	import Analytics from './../lib/Components/others/analytics.svelte';
	import * as config from '$lib/config';

	import { LL, setLocale } from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';
	export let data;

	loadAllLocales();
	// @ts-ignore
	i18n($locale);
	setLocale(data.Lang);

	import '../app.postcss';
	import Fa from 'svelte-fa';
	import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/tomorrow-night-bright.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/Components/Switch/LightSwitch.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { fade } from 'svelte/transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// @ts-ignore
	import { gsap } from 'gsap/dist/gsap';
	// @ts-ignore
	import { Flip } from 'gsap/dist/Flip';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { ScrollToTop } from '$lib';
	import LangSwitch from '$lib/Components/Switch/LangSwitch.svelte';
	import { loadAllLocales } from '$i18n/i18n-util.sync';
	import { i18n } from 'typesafe-i18n';

	function getCurrentYear(): number {
		const currentDate = new Date();
		return currentDate.getFullYear();
	}

	gsap.registerPlugin(Flip);

	let state: Flip.FlipState;

	beforeNavigate(async () => {
		ScrollToTop('instant');
		state = await Flip.getState('.postTitle, .postTags, .postDetails, .navA');
	});

	afterNavigate(async () => {
		ScrollToTop('instant');
		await Flip.from(state, {
			targets: '.postTitle, .postTags, .postDetails, .navA',
			duration: 0.3,
			scale: true,
			ease: 'power1.easeOut'
		});
	});
</script>

<svelte:head>
	<link rel="canonical" href="{config.url}{data.url.replace('/', '')}" />
</svelte:head>

<Analytics />

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="w-full p-2 flex justify-center px-4 mb-5 select-none" id="top">
			<div class="h-full w-[900px] flex md:justify-between md:flex-row gap-2 flex-col">
				<div class="flex gap-4 items-center">
					<a href="/{data.Lang}"><strong id="SiteTitle" class="text-2xl">Islam Zaoui</strong></a>
					<LightSwitch />
					<LangSwitch />
					<a
						class="mybtn {data.url.startsWith(`/${data.Lang}/search`)
							? 'dark:text-tertiary-500 text-tertiary-800'
							: ''}"
						href="/{data.Lang}/search"
					>
						<Fa icon={faSearch} size="18" />
					</a>
				</div>
				<div class="flex gap-4 items-center">
					<div>
						<a class="text-lg font-bold mybtn" href="/{data.Lang}/">{$LL.HOME()}</a>
						{#if data.url === `/${data.Lang}`}<div
								class="navA border-t-2 dark:border-white border-black"
								data-flip-id="navA"
							/>{/if}
					</div>
					<div>
						<a class="text-lg font-bold mybtn" href="/{data.Lang}/posts">{$LL.POSTS()}</a>
						{#if data.url.startsWith(`/${data.Lang}/posts`)}<div
								class="navA border-t-2 dark:border-white border-black"
								data-flip-id="navA"
							/>{/if}
					</div>
				</div>
			</div>
		</nav>
	</svelte:fragment>
	{#key data.url}
		<div in:fade class="px-4 h-full">
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<nav
			class="flex md:flex-row flex-col justify-center w-full text-center p-5 text-[12px] md:gap-3 select-none mt-5"
		>
			<div class="space-x-3">
				<span>©{getCurrentYear()}</span>
				<span>Islam Zaoui</span>
				<a
					class="myanchor"
					href="https://creativecommons.org/licenses/by-sa/4.0/"
					rel="license"
					target="_blank">CC BY-SA</a
				>
			</div>
			<span dir={$LL.DIR()}
				>{$LL.POWERED()}
				<a class="myanchor" href="https://kit.svelte.dev/" target="_blank" rel="external"
					>Sveltekit</a
				>
				{$LL.AND()}
				<a class="myanchor" href="https://skeleton.dev/" target="_blank" rel="external">Skeleton</a
				>.
			</span>
			<span dir={$LL.DIR()}>
				{$LL.CONTACTEMAIL()}
				<a class="myanchor" href="mailto:contact@islamzaoui.top"
					>contact@islamzaoui.top</a
				>
			</span>
		</nav>
	</svelte:fragment>
</AppShell>
