<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
</script>

{#key $page.url.pathname}
	<div in:fade class="px-4 h-full">
		<slot />
	</div>
{/key}
