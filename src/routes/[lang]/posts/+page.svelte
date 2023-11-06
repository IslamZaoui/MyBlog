<!-- YourComponent.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { ScrollToTop } from '$lib';
	import type { PageData } from './$types';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import Fa from 'svelte-fa';
	import { faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
	import * as config from '$lib/config'
	export let data: PageData;
</script>

<svelte:head>
	<title>{$LL.POSTS()} | {config.title}</title>

	<meta content={config.Postdescription} name="description" />

	<meta content="{$LL.POSTS()} | {config.title}" property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{data.url.replace('/','')}" property="og:url" />
	<meta content={config.Postdescription} property="og:description" />
	<meta content="{$LL.POSTS()} | {config.title}" property="og:site_name" />

	<!-- <meta content={config.twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{$LL.POSTS()} | {config.title}" name="twitter:title" />
	<meta content={config.Postdescription} name="twitter:description" />
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<main class="container h-full mx-auto flex justify-center items-centerselect-none relative">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8" dir={$LL.DIR()}>
			<h1><strong class="text-4xl">{$LL.POSTS()}</strong></h1>
			<a
				href="posts/rss.xml"
				class="text-xl underline hover:dark:text-tertiary-500 hover:text-tertiary-800 w-fit"
				data-sveltekit-preload-data="off">RSS</a
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
					><Fa icon={faArrowLeft} /><span>Prev</span></a
				>
			{/if}
			{#if data.hasMorePosts}
				<a
					class="btn btn-sm variant-filled ml-auto"
					href="/{$page.params.lang}/posts?page={data.page + 1}"
					><span>Next</span><Fa icon={faArrowRight} /></a
				>
			{/if}
		</div>
	</div>
	<button name='scroll'
		class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
		on:click={() => ScrollToTop('smooth')}><Fa icon={faArrowUp} /></button
	>
</main>
