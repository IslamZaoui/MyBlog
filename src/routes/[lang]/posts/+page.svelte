<!-- YourComponent.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { ScrollToTop } from '$lib';
	import type { PageData } from './$types';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import Fa from 'svelte-fa';
	import { faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
	export let data: PageData;
</script>

<svelte:head>
	<title>{$LL.POSTS()} | Islam Zaoui</title>
</svelte:head>

<main class="container h-full mx-auto flex justify-center items-center mt-6 select-none relative">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8" dir={$LL.DIR()}>
			<strong class="posts text-4xl" data-flip-id="posts">{$LL.POSTS()}</strong>
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
				<a class="btn btn-sm variant-filled mr-auto" href="/{$page.params.lang}/posts?page={data.page - 1}"
					><Fa icon={faArrowLeft} /><span>Prev</span></a
				>
			{/if}
			{#if data.hasMorePosts}
				<a class="btn btn-sm variant-filled ml-auto" href="/{$page.params.lang}/posts?page={data.page + 1}"
					><span>Next</span><Fa icon={faArrowRight} /></a
				>
			{/if}
		</div>
	</div>
	<button
		class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
		on:click={() => ScrollToTop('smooth')}><Fa icon={faArrowUp} /></button
	>
</main>
