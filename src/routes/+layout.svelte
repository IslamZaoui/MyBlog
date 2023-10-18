<script lang="ts">
	import { LL, setLocale } from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';
	export let data;

	loadAllLocales();
	// @ts-ignore
	i18n($locale);
	setLocale(data.Lang);

	import '../app.postcss';
	import '../video.postcss'
	import Fa from 'svelte-fa';
	import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, Drawer, storeHighlightJs, type DrawerSettings } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/Components/Switch/LightSwitch.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { fade } from 'svelte/transition';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { ScrollToTop } from '$lib';
	import LangSwitch from '$lib/Components/Switch/LangSwitch.svelte';
	import { loadAllLocales } from '$i18n/i18n-util.sync';
	import { i18n } from 'typesafe-i18n';

	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		width: 'w-[100px]',
		position: 'right'
	};

	function getCurrentYear(): number {
		const currentDate = new Date();
		return currentDate.getFullYear();
	}

	//@ts-ignore
	import { gsap } from 'gsap/dist/gsap'
	//@ts-ignore
	import { Flip } from 'gsap/dist/Flip'
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Flip);
	});

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

	onNavigate(() => {
		drawerStore.close();
	});
</script>

<Drawer>
	<nav class="flex flex-col gap-3 p-2 items-center select-none">
		<div>
			<a class="text-lg hover:dark:text-tertiary-500 hover:text-tertiary-800" href="/{data.Lang}/"
				>{$LL.HOME()}</a
			>
			{#if data.url === `/${data.Lang}`}<div
					class="navA border-t-2 dark:border-white border-black"
					data-flip-id="navA"
				/>{/if}
		</div>
		<div>
			<a
				class="text-lg hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="/{data.Lang}/posts">{$LL.POSTS()}</a
			>
			{#if data.url.startsWith(`/${data.Lang}/posts`)}<div
					class="navA border-t-2 dark:border-white border-black"
					data-flip-id="navA"
				/>{/if}
		</div>
	</nav>
</Drawer>
<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="w-full h-[60px] flex justify-center px-4 select-none" id="top">
			<div class="h-full w-[900px] flex justify-between">
				<div class="flex gap-3 items-center justify-center">
					<a href="/{data.Lang}"><strong id="SiteTitle" class="text-2xl">Islam Zaoui</strong></a>
					<LightSwitch />
					<LangSwitch />
					<a
						class="hover:dark:text-tertiary-500 hover:text-tertiary-800 {data.url.startsWith(
							`/${data.Lang}/search`
						)
							? 'dark:text-tertiary-500 text-tertiary-800'
							: ''}"
						href="/{data.Lang}/search"
					>
						<Fa icon={faSearch} size="18" />
					</a>
				</div>
				<div class="md:flex hidden gap-2 items-center">
					<div>
						<a
							class="text-lg font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
							href="/{data.Lang}/">{$LL.HOME()}</a
						>
						{#if data.url === `/${data.Lang}`}<div
								class="navA border-t-2 dark:border-white border-black"
								data-flip-id="navA"
							/>{/if}
					</div>
					<div>
						<a
							class="text-lg font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
							href="/{data.Lang}/posts">{$LL.POSTS()}</a
						>
						{#if data.url.startsWith(`/${data.Lang}/posts`)}<div
								class="navA border-t-2 dark:border-white border-black"
								data-flip-id="navA"
							/>{/if}
					</div>
				</div>
				<button class="md:hidden" on:click={() => drawerStore.open(drawerSettings)}
					><Fa icon={faBars} size="18" /></button
				>
			</div>
		</nav>
	</svelte:fragment>
	{#key data.url}
		<div in:fade class="px-4">
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<nav
			class="flex md:flex-row flex-col justify-center w-full text-center p-5 text-[13px] md:gap-3 select-none"
		>
			<div class="space-x-3">
				<span>©{getCurrentYear()}</span>
				<span>Islam Zaoui</span>
				<a
					class="underline underline-offset-4 hover:no-underline font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://creativecommons.org/licenses/by-sa/4.0/"
					target="_blank">CC BY-SA</a
				>
			</div>
			<span dir={$LL.DIR()}
				>{$LL.POWERED()}
				<a
					class="underline underline-offset-4 hover:no-underline font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://kit.svelte.dev/"
					target="_blank">Sveltekit</a
				>
				{$LL.AND()}
				<a
					class="underline underline-offset-4 hover:no-underline font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://skeleton.dev/"
					target="_blank">Skeleton</a
				>.
			</span>
			<span dir={$LL.DIR()}>
				{$LL.DESIGN()}
				<a
					class="underline underline-offset-4 hover:no-underline font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://haseebmajid.dev/"
					target="_blank">Haseeb Majids</a
				>
			</span>
		</nav>
	</svelte:fragment>
</AppShell>
