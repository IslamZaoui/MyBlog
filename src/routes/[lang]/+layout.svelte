<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import LangSwitch from '$lib/Components/Switch/LangSwitch.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import { fade } from 'svelte/transition';
	import config from '$lib/config';
	import LightSwitch from '$lib/Components/Switch/LightSwitch.svelte';
	import { onShallow, getCurrentYear } from '$lib';
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	import searchPage from '../[lang]/search/+page.svelte';

	export let data;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<nav class="w-full flex justify-center select-none p-4 mb-10" id="top">
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
						on:click={(e) => onShallow(e, modalStore, searchPage)}
					>
						<Fa icon={faSearch} size="18" />
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
	</svelte:fragment>
	{#key data.url}
		<div in:fade class="px-4 h-full">
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<nav
			class="flex md:flex-row flex-col justify-center w-full text-center p-6 text-[11px] md:gap-3 select-none mt-5"
		>
			<div class="space-x-2">
				<span>© {getCurrentYear()} Islam Zaoui</span>
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
				<a class="myanchor" href="mailto:{config.contactEmail}">{config.contactEmail}</a>
			</span>
		</nav>
	</svelte:fragment>
</AppShell>
