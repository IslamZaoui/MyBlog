<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import utils from '$lib/utils/index';
	import Tags from 'lucide-svelte/icons/tags';
	import Calendar from 'lucide-svelte/icons/calendar-days';
	import FileBar from 'lucide-svelte/icons/file-bar-chart-2';
	import Clock from 'lucide-svelte/icons/clock';
	import Eye from 'lucide-svelte/icons/eye';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	export let post: Post;
</script>

<a
	href="/{$page.data.Lang}/posts/{post.slug}"
	class="select-none"
	on:click={() => modalStore.close()}
	><div class="card shadow-md rounded-md card-hover" dir={$LL.DIR()}>
		<article class="p-4 space-y-2">
			<header class="postTitle text-2xl font-bold" data-flip-id="postTitle-{post.slug}">
				<h2>{post.title}</h2>
			</header>
			<p class="line-clamp-2">{post.description}</p>
			<small
				class="postTags flex gap-2 items-center dark:text-gray-400 text-gray-800"
				data-flip-id="postTags-{post.slug}"
			>
				<Tags size="18" class="text-gray-500" />
				{#each post.tags as tag, i (i)}
					<span>{tag}{i !== post.tags.length - 1 ? ',' : ''}</span>
				{/each}
			</small>
		</article>
		<footer
			class="postDetails pb-4 pl-4 pr-4 text-[12px] flex flex-wrap items-center gap-3"
			data-flip-id="postDetails-{post.slug}"
		>
			<div class="flex gap-2 items-center">
				<Calendar size="18" class="text-gray-500" />
				<span>{utils.formatDate(post.date)}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<FileBar size="18" class="text-gray-500" />
				<span>{post.readingTime.words} {$LL.WORDS()}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Clock size="18" class="text-gray-500" />
				<span>{post.readingTime.minutes.toFixed()} {$LL.MINS()}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Eye size="18" class="text-gray-500" />
				<span>
					{#await utils.getPostViews(post.slug)}
						{$LL.LOADING()}
					{:then views}
						{views} {$LL.VIEWS()}
					{/await}
				</span>
			</div>
		</footer>
	</div></a
>
