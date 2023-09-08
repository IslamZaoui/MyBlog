<script lang="ts">
	import { formatDate } from '$lib';
	import { faCalendarDays, faClock, faEye, faFileWord, faTags } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import type { PageData } from './$types';
	import { TableOfContents } from '@skeletonlabs/skeleton';
	

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} | Islam Zaoui" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<article class="w-[800px] space-y-10">
		<header class="space-y-4">
			<div class="space-y-2">
				<h2 class="h2 font-bold">{data.meta.title}</h2>
				<small class="flex gap-2 items-center dark:text-gray-400 text-gray-800">
					<Fa icon={faTags} class="text-gray-500" />
					{#each data.meta.tags as tag, i (i)}
						<span>{tag}{i !== data.meta.tags.length - 1 ? ',' : ''}</span>
					{/each}
				</small>
			</div>
			<footer class="text-sm flex items-center gap-3">
				<div class="flex gap-2 items-center">
					<Fa icon={faCalendarDays} class="text-gray-500" />
					<span>{formatDate(data.meta.date)}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faFileWord} class="text-gray-500" />
					<span>{data.meta.words} words</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faClock} class="text-gray-500" />
					<span>{data.meta.readTime} min</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faEye} class="text-gray-500" />
					<span>{data.meta.views} views</span>
				</div>
			</footer>
		</header>
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
