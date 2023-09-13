<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';
	import autoAnimate from '@formkit/auto-animate';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';

	export let data: PageData;

	const searchPost = data.posts.map((post) => ({
		...post,
		searchTerm: `${post.title} ${post.tags} ${post.description}`
	}));

	const searchStore = createSearchStore(searchPost);

    const unsub = searchStore.subscribe((model) => searchHandler(model))

    onDestroy(()=>{
        unsub();
    })
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<div class="w-[700px] space-y-4">
		<input type="text" class="input" placeholder="{$LL.SEARCH()}..." bind:value={$searchStore.search} dir={$LL.DIR()}/>
		<div class="flex flex-col gap-3" use:autoAnimate>
            {#each $searchStore.filtered as post}
                <PostCard {post}/>
            {/each}
        </div>
	</div>
</div>
