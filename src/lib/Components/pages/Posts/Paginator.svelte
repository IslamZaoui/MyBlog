<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import * as LL from '$paraglide/messages';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	export let currentPage: number;
	export let hasMorePosts: boolean;
</script>

<div class="flex justify-between">
	{#if currentPage > 1}
		<a
			class="btn btn-sm variant-filled mr-auto"
			href="/posts?page={currentPage - 1}"
			aria-label="Previous Page"><ArrowLeft size="24" /><span>{LL.PREV()}</span></a
		>
	{/if}
	{#if hasMorePosts}
		<a
			class="btn btn-sm variant-filled ml-auto"
			href="/posts?page={currentPage + 1}"
			aria-label="Next Page"><span>{LL.NEXT()}</span><ArrowRight size="24" /></a
		>
	{/if}
</div>
