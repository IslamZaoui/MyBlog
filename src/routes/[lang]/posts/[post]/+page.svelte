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
		faEye,
		faFileWord,
		faTags
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} | Islam Zaoui" />
	<meta property="og:url" content="{config.url}posts/{data.meta.slug}" />
	<meta property="article:published_time" content={data.meta.date} />
	<meta property="article:tags" content={data.meta.tags.toString()} />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<article class="w-[800px] space-y-10">
		<header class="space-y-4 select-none" dir={$LL.DIR()}>
			<a
				class="flex gap-2 items-center posts"
				href="/{$page.params.lang}/posts"
				data-flip-id="posts"
			>
				{#if $page.params.lang === 'en'}
					<Fa icon={faArrowLeft} />
				{:else}
					<Fa icon={faArrowRight} />
				{/if}
				<h3 class="h3">{$LL.POSTS()}</h3>
			</a>
			<div class="space-y-2">
				<h2 class="postTitle h2 font-bold" data-flip-id="postTitle-{data.meta.slug}">
					{data.meta.title}
				</h2>
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
					<span>{formatDate(data.meta.date)}</span>
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
				<span>•</span>
				<div class="flex gap-2 items-center">
					<Fa icon={faEye} class="text-gray-500" />
					<span>{data.meta.views} {$LL.VIEWS()}</span>
				</div>
			</footer>
		</header>
		<div class="prose" dir="auto">
			<svelte:component this={data.content} />
		</div>
	</article>
	<button
		class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
		on:click={() => ScrollToTop('smooth')}><Fa icon={faArrowUp} /></button
	>
</div>
