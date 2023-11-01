<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import type { PageData } from './$types';
	import autoAnimate from '@formkit/auto-animate';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import * as config from '$lib/config'

	export let data: PageData;

	let Posts = data.posts;

	let searchTerm = '';

	async function Search() {
		const url = `/${$page.params.lang}/API/getPosts?search=true&filter=${searchTerm}`;
		console.log('fetch url: ' + url);
		const response = await fetch(url);
		const data = (await response.json()) as {
			posts: Post[];
			hasMorePosts: boolean;
		};
		Posts = data.posts;
	}
</script>

<svelte:head>
	<title>Search | {config.title}</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center">
	<div class="w-[700px] space-y-4">
		<div class="flex">
			<input
				type="text"
				class="input rounded-r-none"
				placeholder="{$LL.SEARCH()}..."
				dir={$LL.DIR()}
				bind:value={searchTerm}
			/>
			<button name="search" class="btn h-full variant-filled rounded-l-none" on:click={Search}
				>{$LL.SEARCH()}</button
			>
		</div>
		<div class="flex flex-col gap-3" use:autoAnimate>
			{#each Posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
</div>
