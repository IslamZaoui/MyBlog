<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import * as LL from "$paraglide/messages"
	import { page } from '$app/stores';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	export let posts: nextprevPosts;
</script>

{#if posts.next || posts.previous}
	<section class="flex justify-between">
		{#if posts.previous}
			<a
				class="mr-auto flex-col flex font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="/posts/{posts.previous.slug}"
				aria-label="Previous Page"
			>
				<span class="flex gap-2"><ArrowLeft size="24" />{LL.PREV()}</span>
				<span>{posts.previous.title}</span>
			</a>
		{/if}
		{#if posts.next}
			<a
				class="ml-auto flex-col flex items-end font-bold hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="/posts/{posts.next.slug}"
				aria-label="Previous Page"
			>
				<span class="flex gap-2">{LL.NEXT()}<ArrowRight size="24" /></span>
				<span>{posts.next.title}</span>
			</a>
		{/if}
	</section>
{/if}
