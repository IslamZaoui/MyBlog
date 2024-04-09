<script lang="ts">
	import * as LL from '$paraglide/messages';
	import { page } from '$app/stores';
	import config from '$lib/config';
</script>

<svelte:head>
	<title>{config.name} | {LL.ERROR()} {$page.status}</title>
</svelte:head>

<div class="flex flex-col justify-center h-full items-center gap-4">
	<span class="text-6xl font-bold text-primary-500">{LL.ERROR()} {$page.status}</span>

	{#if $page.error?.message}
		<span class="text-2xl text-gray-600">{$page.error?.message}</span>
	{/if}
	{#if $page.error?.details}
		<span class="text-gray-600">{$page.error?.details}</span>
	{/if}

	<a href="/" class="btn variant-filled-primary">
		{LL.ERRORBTN()}
	</a>
</div>
