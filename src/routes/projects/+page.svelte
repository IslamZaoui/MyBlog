<script lang="ts">
	import type { PageData } from './$types';
	import RepoCard from '$lib/Components/Projects/RepoCard.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Projects | Islam Zaoui</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8">
			<strong class="text-4xl">Projects</strong>
			<a href="/projects/rss.xml" class="text-xl underline hover:dark:text-tertiary-500 hover:text-tertiary-800 w-fit" data-sveltekit-preload-data='false'>RSS</a>
		</header>
		<div class="grid grid-cols-1 gap-4">
			{#each data.repos as repo}
				<RepoCard {repo}/>
			{/each}
		</div>
	</div>
</div>
