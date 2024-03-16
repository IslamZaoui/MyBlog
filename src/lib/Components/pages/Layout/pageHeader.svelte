<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import appScroll from '$lib/stores/appscroll';
	import type { Locales } from '$i18n/i18n-types';
	import LightSwitch from '../../ui/Switch/LightSwitch.svelte';
	import { Search } from 'lucide-svelte';
	import LangSwitch from '../../ui/Switch/LangSwitch.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import utils from '$lib/utils';
	import { page } from '$app/stores';

	const modalStore = getModalStore();

	export let data: {
		Lang: Locales;
		url: string;
	};
</script>

<nav class="w-full flex justify-center select-none mb-4 py-4">
	<div
		class="h-full w-[800px] flex sm:justify-between sm:flex-row gap-2 flex-col"
	>
		<div class="flex gap-4 items-center">
			<a href="/{data.Lang}"><strong id="SiteTitle" class="text-2xl">Islam Zaoui</strong></a>
			<LightSwitch />
			<LangSwitch />
			{#if !$page.url.pathname.endsWith('/search')}
				<a
					class="mybtn flex gap-2 rounded p-2 sm:variant-soft sm:hover:variant-soft-primary"
					href="/{data.Lang}/search"
					aria-label="Search"
					on:click={async (e) => await utils.onShallowSearch(e, modalStore, data.url)}
				>
					<Search size="24" />
					<small class="hidden sm:inline-block"
						><kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd></small
					>
				</a>
			{/if}
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
