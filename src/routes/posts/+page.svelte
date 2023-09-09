<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Posts | Islam Zaoui</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6 select-none">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8">
			<strong class="posts text-4xl" data-flip-id="posts">Posts</strong>
			<a href="posts/rss.xml" class="text-xl underline hover:dark:text-tertiary-500 hover:text-tertiary-800 w-fit" data-sveltekit-preload-data='off'>RSS</a>
		</header>
		<div class="grid grid-cols-1 gap-4">
			{#each data.posts as post}
				<PostCard {post}/>
			{/each}
		</div>
	</div>
</div>
