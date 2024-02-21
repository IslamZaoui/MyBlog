<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import { LL } from '$i18n/i18n-svelte';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { page } from '$app/stores';

	export let currentPage: number;
	export let hasMorePosts: boolean;
</script>

<div class="flex justify-between">
	{#if currentPage > 1}
		<a
			class="btn btn-sm variant-filled mr-auto"
			href="/{$page.params.lang}/posts?page={currentPage - 1}"
			aria-label="Previous Page"><ArrowLeft size="24" /><span>{$LL.PREV()}</span></a
		>
	{/if}
	{#if hasMorePosts}
		<a
			class="btn btn-sm variant-filled ml-auto"
			href="/{$page.params.lang}/posts?page={currentPage + 1}"
			aria-label="Next Page"><span>{$LL.NEXT()}</span><ArrowRight size="24" /></a
		>
	{/if}
</div>
