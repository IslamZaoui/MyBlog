<script lang="ts">
	import '../app.postcss';
	import 'iconify-icon'

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
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="w-full h-[60px] flex justify-center">
			<div class="h-full w-[900px] flex justify-between">
				<div class="flex gap-3 items-center">
					<strong class="h3">Islam Zaoui</strong>
					<LightSwitch />
					<button class="hover:text-tertiary-500">
						<iconify-icon icon="mdi:search" height='24'></iconify-icon>
					</button>
				</div>
				<div class="flex gap-2 items-center">
					<a
						class="text-lg hover:text-tertiary-500 {data.url === '/'
							? 'underline underline-offset-8'
							: ''}"
						href="/">Main</a
					>
					<a
						class="text-lg hover:text-tertiary-500 {data.url === '/page2'
							? 'underline underline-offset-8'
							: ''}"
						href="/page2">Page2</a
					>
				</div>
			</div>
		</nav>
	</svelte:fragment>
	{#key data.url}
		<div in:fade>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<nav class="w-full text-center p-5 text-[13px] space-x-3">
			<span>© 2023 Islam Zaoui</span>
			<a class="underline hover:text-tertiary-500" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"
				>CC BY-SA</a
			>
			<span
				>Powered with 💖 by <a class="underline hover:text-tertiary-500" href="https://kit.svelte.dev/" target="_blank"
					>Sveltekit</a
				>
				& <a class="underline hover:text-tertiary-500" href="https://skeleton.dev/" target="_blank">Skeleton</a>.</span
			>
		</nav>
	</svelte:fragment>
</AppShell>
