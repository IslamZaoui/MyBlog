<script lang="ts">
	import Head from '$lib/Components/Page/postsHead.svelte';
	import { afterNavigate } from '$app/navigation';
	import { LL } from '$i18n/i18n-svelte';
	import type { PageData } from './$types';
	import Posts from '$lib/Components/Posts';
	import Button from '$lib/Components/Button';
	import utils from '$lib/utils';

	export let data: PageData;

	afterNavigate(() => {
		utils.ScrollToTop('smooth');
	});
</script>

<Head />

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
				<Posts.Card {post} />
			{/each}
		</div>
		<Posts.Paginator currentPage={data.page} hasMorePosts={data.hasMorePosts} />
	</div>
	<Button.ScrollToTop />
</main>
