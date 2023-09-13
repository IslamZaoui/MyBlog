<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$i18n/i18n-svelte';
	import { formatDate } from '$lib';
	import { faTags, faCalendarDays, faFileWord, faClock } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let post: Post;
</script>

<a href="/{$page.data.Lang}/posts/{post.slug}" class="select-none"
	><div class="card shadow-md rounded-md card-hover" dir={$LL.DIR()}>
		<article class="p-4 space-y-2">
			<header class="postTitle text-2xl font-bold" data-flip-id="postTitle-{post.slug}">
				{post.title}
			</header>
			<p class="line-clamp-2">{post.description}</p>
			<small
				class="postTags flex gap-2 items-center dark:text-gray-400 text-gray-800"
				data-flip-id="postTags-{post.slug}"
			>
				<Fa icon={faTags} class="text-gray-500" />
				{#each post.tags as tag, i (i)}
					<span>{tag}{i !== post.tags.length - 1 ? ',' : ''}</span>
				{/each}
			</small>
		</article>
		<footer
			class="postDetails pb-4 pl-4 pr-4 text-sm flex items-center gap-3"
			data-flip-id="postDetails-{post.slug}"
		>
			<div class="flex gap-2 items-center">
				<Fa icon={faCalendarDays} class="text-gray-500" />
				<span>{formatDate(post.date)}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Fa icon={faFileWord} class="text-gray-500" />
				<span>{post.words} {$LL.WORDS()}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Fa icon={faClock} class="text-gray-500" />
				<span>{post.readTime} {$LL.MINS()}</span>
			</div>
		</footer>
	</div></a
>
