<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
	import config from '$lib/config'
</script>

<svelte:head>
	<title>{config.name} | {$LL.ERROR()} {$page.status}</title>
</svelte:head>

<div class="flex flex-col justify-center h-full items-center">
	<span class="text-6xl font-bold text-primary-500 mb-4">{$LL.ERROR()} {$page.status}</span>
	<span class="text-lg text-gray-600 md:text-gray-400 mb-8">{$page.error?.message}</span>

	<a href="/" class="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600">
		{$LL.ERRORBTN()}
	</a>
</div>
