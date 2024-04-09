<script lang="ts">
	import Head from '$lib/Components/pages/head/postsHead.svelte';
	import { afterNavigate } from '$app/navigation';
	import * as LL from '$paraglide/messages';
	import type { PageData } from './$types';
	import Posts from '$lib/Components/pages/Posts';
	import Button from '$lib/Components/ui/Button';
	import utils from '$lib/utils';

	export let data: PageData;

	afterNavigate(() => {
		utils.ScrollToTop('smooth');
	});
</script>

<Head />

<main class="container h-full mx-auto flex justify-center items-centerselect-none relative">
	<div class="space-y-2 w-[900px]">
		<header class="flex flex-col gap-4 mb-8">
			<h1><strong class="text-4xl">{LL.ALLPOSTS()}</strong></h1>
		</header>
		<div class="grid grid-cols-1 gap-4">
			{#each data.posts as post}
				<Posts.Card {post} />
			{/each}
		</div>
	</div>
	<Button.ScrollToTop />
</main>
