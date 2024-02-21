<script lang="ts">
	import { searchHandler } from '$lib/stores/search';
	import { createSearchStore } from '$lib/stores/search';
	import { LL } from '$i18n/i18n-svelte';
	import type { PageData } from './$types';
	import autoAnimate from '@formkit/auto-animate';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import config from '$lib/config';
	import { onDestroy } from 'svelte';

	export let data: PageData;

	const searchPosts = data.posts.map((post) => ({
		...post,
		searchTerms:
			`${post.title} ${post.description} ${post.tags.join(' ')} ${post.slug}`.toLowerCase()
	}));

	const searchStore = createSearchStore(searchPosts);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>{$LL.SEARCH()} | {config.name}</title>
</svelte:head>

<div class="h-full mx-auto flex max-w-[800px] justify-center">
	<div class="w-full space-y-4">
		<div class="flex">
			<input
				type="search"
				class="input rounded-r-none"
				placeholder="{$LL.SEARCH()}..."
				dir={$LL.DIR()}
				bind:value={$searchStore.search}
			/>
		</div>
		<div
			class="max-h-[480px] hide-scrollbar flex gap-3 flex-col overflow-x-auto p-1"
			use:autoAnimate
		>
			{#each $searchStore.filtered as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
</div>
