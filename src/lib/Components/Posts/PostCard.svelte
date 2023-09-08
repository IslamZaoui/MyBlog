<script lang="ts">
	import { formatDate } from "$lib";
	import { faTags, faCalendarDays, faFileWord, faClock } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let post: Post
</script>

<a href="/posts/{post.slug}"
	><div class="card shadow-md rounded-md">
		<article class="p-4 space-y-2">
			<header class="postTitle text-2xl font-bold" data-flip-id="postTitle-{post.title}">{post.title}</header>
			<p class="line-clamp-2">{post.description}</p>
			<div class="postTags flex gap-2 items-center" data-flip-id="postTags-{post.title}">
				<Fa icon={faTags} class="text-gray-500" />
				{#each post.tags as tag, i (i)}
					<span>{tag}{i !== post.tags.length - 1 ? ',' : ''}</span>
				{/each}
			</div>
		</article>
		<footer class="postDetails pb-4 pl-4 text-sm flex items-center gap-3" data-flip-id="postDetails-{post.title}">
			<div class="flex gap-2 items-center">
				<Fa icon={faCalendarDays} class="text-gray-500" />
				<span>{formatDate(post.date)}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Fa icon={faFileWord} class="text-gray-500" />
				<span>{post.words} words</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<Fa icon={faClock} class="text-gray-500" />
				<span>{post.readTime} min</span>
			</div>
		</footer>
	</div></a
>
