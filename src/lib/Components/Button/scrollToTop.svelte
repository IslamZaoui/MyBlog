<script lang="ts">
	import appScroll from '$lib/stores/appscroll';
	import utils from '$lib/utils';
	import { ArrowUp } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
</script>

{#if $appScroll > 20}
	<button
		in:fade
		out:fade
		aria-label="scroll to top"
		class="variant-filled btn-icon fixed bottom-10 right-4 z-50"
		on:click={() => utils.ScrollToTop('smooth')}><ArrowUp size="28" /></button
	>
{/if}
