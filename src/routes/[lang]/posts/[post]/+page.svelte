<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { ScrollToTop, formatDate, increasePostViews } from '$lib';
	import Tags from 'lucide-svelte/icons/tags';
	import Calendar from 'lucide-svelte/icons/calendar-days';
	import FileBar from 'lucide-svelte/icons/file-bar-chart-2';
	import Clock from 'lucide-svelte/icons/clock';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowUp from 'lucide-svelte/icons/arrow-up';
	import Eye from 'lucide-svelte/icons/eye';
	import config from '$lib/config';
	import type { PageData } from './$types';
	import { tocCrawler } from '@skeletonlabs/skeleton';
	import appScroll from '$lib/stores/appscroll';
	import TableofContents from '$lib/Components/Posts/TableofContents.svelte';
	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(async () => {
		await increasePostViews(data.meta.slug, $page.params.lang);
	});
</script>

<svelte:head>
	<title>{data.meta.title} | {config.name}</title>
	<meta content={data.meta.description} name="description" />

	<meta content="{data.meta.title} | {config.name}" property="og:title" />
	<meta
		content="{config.url}en/API/OG/{data.meta.title.replace(/ /g, '%20')}"
		property="og:image"
	/>
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta content={data.meta.description} property="og:description" />
	<meta content={config.name} property="og:site_name" />
	<meta content="article" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{data.meta.title} | {config.name}" name="twitter:title" />
	<meta content={data.meta.description} name="twitter:description" />
	<meta
		content="{config.url}en/API/OG/{data.meta.title.replace(/ /g, '%20')}"
		name="twitter:image"
	/>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-[800px] space-y-10">
		<header class="space-y-4 select-none" dir={$LL.DIR()}>
			<a class="flex gap-2 items-center text-4xl" href="/{$page.params.lang}/posts">
				{#if $page.params.lang === 'en'}
					<ArrowLeft size="36" />
				{:else}
					<ArrowRight />
				{/if}
				<strong>{$LL.POSTS()}</strong>
			</a>
			<div class="space-y-2">
				<h1 class="postTitle h2 font-bold" data-flip-id="postTitle-{data.meta.slug}">
					{data.meta.title}
				</h1>
				<small
					class="postTags flex gap-2 items-center dark:text-gray-400 text-gray-800"
					data-flip-id="postTags-{data.meta.slug}"
				>
					<Tags size="18" class="text-gray-500" />
					{#each data.meta.tags as tag, i (i)}
						<span>{tag}{i !== data.meta.tags.length - 1 ? ',' : ''}</span>
					{/each}
				</small>
			</div>
			<footer
				class="postDetails text-[14px] flex items-center gap-2 flex-wrap"
				data-flip-id="postDetails-{data.meta.slug}"
			>
				<div class="flex gap-2 items-center">
					<Calendar size="18" class="text-gray-500" />
					<span>{formatDate(data.meta.date, $page.params.lang)}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<FileBar size="18" class="text-gray-500" />
					<span>{data.meta.readingTime.words} {$LL.WORDS()}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Clock size="18" class="text-gray-500" />
					<span>{data.meta.readingTime.minutes.toFixed()} {$LL.MINS()}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Eye size="18" class="text-gray-500" />
					<span>{data.meta.views} {$LL.VIEWS()}</span>
				</div>
			</footer>
			<TableofContents />
		</header>
		<article class="prose" dir="auto" use:tocCrawler={{ mode: 'generate' }}>
			<svelte:component this={data.content} />
		</article>
	</div>
	{#if $appScroll > 20}
		<button
			in:fade
			out:fade
			name="scroll"
			class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
			on:click={() => ScrollToTop('smooth')}><ArrowUp size="28" /></button
		>
	{/if}
</div>
