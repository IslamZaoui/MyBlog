<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { ScrollToTop } from '$lib';
	import type { PageData } from './$types';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowUp from 'lucide-svelte/icons/arrow-up';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import config from '$lib/config';
	import appScroll from '$lib/stores/appscroll';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<svelte:head>
	<title>{$LL.POSTS()} | {config.name}</title>

	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="description"
	/>

	<meta content="{$LL.POSTS()} | {config.name}" property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		property="og:description"
	/>
	<meta content={config.name} property="og:site_name" />
	<meta content="website" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{$LL.POSTS()} | {config.name}" name="twitter:title" />
	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="twitter:description"
	/>
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<main class="container h-full mx-auto flex justify-center items-centerselect-none relative">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8" dir={$LL.DIR()}>
			<h1><strong class="text-4xl">{$LL.POSTS()}</strong></h1>
			<a href="posts/rss.xml" class="text-xl myanchor w-fit" data-sveltekit-preload-data="off"
				>RSS</a
			>
		</header>
		<div class="grid grid-cols-1 gap-4">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
		<div class="flex justify-between">
			{#if data.page > 1}
				<a
					class="btn btn-sm variant-filled mr-auto"
					href="/{$page.params.lang}/posts?page={data.page - 1}"
					><ArrowLeft size="24" /><span>Prev</span></a
				>
			{/if}
			{#if data.hasMorePosts}
				<a
					class="btn btn-sm variant-filled ml-auto"
					href="/{$page.params.lang}/posts?page={data.page + 1}"
					><span>Next</span><ArrowRight size="24" /></a
				>
			{/if}
		</div>
	</div>
	{#if $appScroll > 20}
		<button
			in:fade
			out:fade
			name="scroll"
			class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
			on:click={() => ScrollToTop('smooth')}><ArrowUp size="28" /></button
		>
	{/if}
</main>
