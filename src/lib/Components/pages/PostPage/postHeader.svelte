<script lang='ts'>
	import Tags from 'lucide-svelte/icons/tags';
	import Calendar from 'lucide-svelte/icons/calendar-days';
	import FileBar from 'lucide-svelte/icons/file-bar-chart-2';
	import Clock from 'lucide-svelte/icons/clock';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Eye from 'lucide-svelte/icons/eye';
	import { languageTag as currentLang } from "$paraglide/runtime.js"
	import * as LL from "$paraglide/messages"
    import TOC from './TOC.svelte'
	import utils from '$lib/utils';

    export let post: Post
</script>

<header class="space-y-4 select-none" >
	<a class="flex gap-2 items-center text-4xl" href="/posts">
		{#if currentLang() === 'en'}
			<ArrowLeft size="36" />
		{:else}
			<ArrowRight />
		{/if}
		<strong>{LL.POSTS()}</strong>
	</a>
	<div class="space-y-2">
		<h1 class="postTitle h2 font-bold" data-flip-id="postTitle-{post.slug}">
			{post.title}
		</h1>
		<small
			class="postTags flex gap-2 items-center dark:text-gray-400 text-gray-800"
			data-flip-id="postTags-{post.slug}"
		>
			<Tags size="18" class="text-gray-500" />
			{#each post.tags as tag, i (i)}
				<span>{tag}{i !== post.tags.length - 1 ? ',' : ''}</span>
			{/each}
		</small>
	</div>
	<div
		class="postDetails text-[14px] flex items-center gap-2 flex-wrap"
		data-flip-id="postDetails-{post.slug}"
	>
		<div class="flex gap-2 items-center">
			<Calendar size="18" class="text-gray-500" />
			<span>{utils.formatDate(post.date, currentLang())}</span>
		</div>
		<span>•</span>
		<div class="flex gap-2 items-center">
			<FileBar size="18" class="text-gray-500" />
			<span>{post.readingTime.words} {LL.WORDS()}</span>
		</div>
		<span>•</span>
		<div class="flex gap-2 items-center">
			<Clock size="18" class="text-gray-500" />
			<span>{post.readingTime.minutes.toFixed()} {LL.MINS()}</span>
		</div>
		<span>•</span>
		<div class="flex gap-2 items-center">
			<Eye size="18" class="text-gray-500" />
			<span>{post.views} {LL.VIEWS()}</span>
		</div>
	</div>
	<TOC />
</header>
