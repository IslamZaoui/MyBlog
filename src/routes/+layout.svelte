<script lang="ts">
	import '../app.postcss';
	import Fa from 'svelte-fa';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/Components/LightSwitch/LightSwitch.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	function getCurrentYear(): number {
		const currentDate = new Date();
		return currentDate.getFullYear();
	}
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="w-full h-[60px] flex justify-center px-4">
			<div class="h-full w-[900px] flex justify-between">
				<div class="flex gap-3 items-center justify-center">
					<a href="/"><strong class="h3">Islam Zaoui</strong></a>
					<LightSwitch />
					<a
						class="hover:dark:text-tertiary-500 hover:text-tertiary-800 {data.url.startsWith(
							'/search'
						)
							? 'dark:text-tertiary-500 text-tertiary-800'
							: ''}"
						href="/search"
					>
						<Fa icon={faSearch} size="18" />
					</a>
				</div>
				<div class="flex gap-2 items-center">
					<a
						class="text-lg hover:dark:text-tertiary-500 hover:text-tertiary-800 {data.url === '/'
							? 'underline underline-offset-8'
							: ''}"
						href="/">Home</a
					>
					<a
						class="text-lg hover:dark:text-tertiary-500 hover:text-tertiary-800 {data.url.startsWith(
							'/posts'
						)
							? 'underline underline-offset-8'
							: ''}"
						href="/posts">Posts</a
					>
				</div>
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
			class="flex md:flex-row flex-col justify-center w-full text-center p-5 text-[13px] md:gap-3"
		>
			<div class="space-x-3">
				<span>© {getCurrentYear()} Islam Zaoui</span>
				<a
					class="underline hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://creativecommons.org/licenses/by-sa/4.0/"
					target="_blank">CC BY-SA</a
				>
			</div>
			<div>
				<span
					>Powered by <a
						class="underline hover:dark:text-tertiary-500 hover:text-tertiary-800"
						href="https://kit.svelte.dev/"
						target="_blank">Sveltekit</a
					>
					&
					<a
						class="underline hover:dark:text-tertiary-500 hover:text-tertiary-800"
						href="https://skeleton.dev/"
						target="_blank">Skeleton</a
					>.
				</span>
			</div>
			<span>
				The design is inspired from
				<a
					class="underline hover:dark:text-tertiary-500 hover:text-tertiary-800"
					href="https://haseebmajid.dev/"
					target="_blank">Haseeb Majids</a
				>
			</span>
		</nav>
	</svelte:fragment>
</AppShell>
