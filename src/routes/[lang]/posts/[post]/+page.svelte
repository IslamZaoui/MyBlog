<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { ScrollToTop, formatDate } from '$lib';
	import {
		faArrowLeft,
		faArrowRight,
		faArrowUp,
		faCalendarDays,
		faClock,
		faFileWord,
		faTags
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	import { tocCrawler } from '@skeletonlabs/skeleton';
	import TableofContents from '$lib/Components/Posts/TableofContents.svelte';
	import { PostData, serializeSchema } from '$lib/SD';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title} | {config.title}</title>
	<meta content={data.meta.description} name="description" />

	<meta content="{data.meta.title} | {config.title}" property="og:title" />
	<meta
		content="{config.url}en/API/OG/{data.meta.title.replace(/ /g, '%20')}"
		property="og:image"
	/>
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta content={data.meta.description} property="og:description" />
	<meta content={config.name} property="og:site_name" />
	<meta content="article" property="og:type" />

	<!--<meta content="{config.twitterHandle}" name="twitter:creator" />-->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{data.meta.title} | {config.title}" name="twitter:title" />
	<meta content={data.meta.description} name="twitter:description" />
	<meta
		content="{config.url}en/API/OG/{data.meta.title.replace(/ /g, '%20')}"
		name="twitter:image"
	/>

	{@html serializeSchema(PostData(data.meta,data.Lang))}
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-[800px] space-y-10">
		<header class="space-y-4 select-none" dir={$LL.DIR()}>
			<a class="flex gap-2 items-center text-4xl" href="/{$page.params.lang}/posts">
				{#if $page.params.lang === 'en'}
					<Fa icon={faArrowLeft} />
				{:else}
					<Fa icon={faArrowRight} />
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
					<Fa icon={faTags} class="text-gray-500" />
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
					<Fa icon={faCalendarDays} class="text-gray-500" />
					<span>{formatDate(data.meta.date, $page.params.lang)}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faFileWord} class="text-gray-500" />
					<span>{data.meta.words} {$LL.WORDS()}</span>
				</div>
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faClock} class="text-gray-500" />
					<span>{data.meta.readTime} {$LL.MINS()}</span>
				</div>
			</footer>
			<TableofContents />
		</header>
		<article class="prose" dir="auto" use:tocCrawler={{ mode: 'generate' }}>
			<svelte:component this={data.content} />
		</article>
	</div>
	<button
		name="scroll"
		class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
		on:click={() => ScrollToTop('smooth')}><Fa icon={faArrowUp} /></button
	>
</div>
