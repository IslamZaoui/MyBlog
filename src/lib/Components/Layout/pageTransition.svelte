<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: string;
</script>

{#key url}
	<div in:fade class="px-4 h-full">
		<slot />
	</div>
{/key}
