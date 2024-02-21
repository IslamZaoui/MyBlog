<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import LightSwitch from '../Switch/LightSwitch.svelte';
	import { Search } from 'lucide-svelte';
	import LangSwitch from '../Switch/LangSwitch.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import utils from '$lib/utils';

	const modalStore = getModalStore();

	export let data: {
		Lang: Locales;
		url: string;
	};
</script>

<nav class="w-full flex justify-center select-none p-4 mb-10" id="top">
	<div class="h-full w-[900px] flex md:justify-between md:flex-row gap-2 flex-col">
		<div class="flex gap-4 items-center">
			<a href="/{data.Lang}"><strong id="SiteTitle" class="text-2xl">Islam Zaoui</strong></a>
			<LightSwitch />
			<LangSwitch />
			<a
				class="mybtn flex gap-2 rounded p-2 md:variant-soft md:hover:variant-soft-primary"
				href="/{data.Lang}/search"
				aria-label="Search"
				on:click={async (e) => await utils.onShallowSearch(e, modalStore)}
			>
				<Search size="24" />
				<small class="hidden md:inline-block"><kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd></small>
			</a>
		</div>
		<div class="flex gap-4 items-center">
			<div>
				<a class="font-bold mybtn" href="/{data.Lang}/">{$LL.HOME()}</a>
				{#if data.url === `/${data.Lang}`}<div
						class="navA border-t-2 dark:border-white border-black"
						data-flip-id="navA"
					/>{/if}
			</div>
			<div>
				<a class="font-bold mybtn" href="/{data.Lang}/posts">{$LL.POSTS()}</a>
				{#if data.url.startsWith(`/${data.Lang}/posts`)}<div
						class="navA border-t-2 dark:border-white border-black"
						data-flip-id="navA"
					/>{/if}
			</div>
		</div>
	</div>
</nav>
