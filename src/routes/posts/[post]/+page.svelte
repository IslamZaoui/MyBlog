<script lang="ts">
	import { formatDate } from '$lib';
	import { faArrowLeft, faCalendarDays, faClock, faEye, faFileWord, faTags } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} | Islam Zaoui" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<article class="w-[800px] space-y-10">
		<header class="space-y-4 select-none">
			<a class='flex gap-2 items-center posts' href="/posts" data-flip-id="posts">
				<Fa icon={faArrowLeft}/>
				<h3 class='h3'>Posts</h3>
			</a>
			<div class="space-y-2">
				<h2 class="postTitle h2 font-bold" data-flip-id="postTitle-{data.meta.title}">{data.meta.title}</h2>
				<small class="postTags flex gap-2 items-center dark:text-gray-400 text-gray-800" data-flip-id="postTags-{data.meta.title}">
					<Fa icon={faTags} class="text-gray-500" />
					{#each data.meta.tags as tag, i (i)}
						<span>{tag}{i !== data.meta.tags.length - 1 ? ',' : ''}</span>
					{/each}
				</small>
			</div>
			<footer class="postDetails text-sm flex items-center gap-3" data-flip-id="postDetails-{data.meta.title}">
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
