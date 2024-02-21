<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import SearchPage from '../../../routes/[lang]/search/+page.svelte';

	const modalStore = getModalStore();

	export let data: any;
</script>

{#if $modalStore[0]}
	<div
		class="card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 p-2 mb-auto space-y-4"
	>
		<SearchPage {data} />
		<footer class="flex gap-3">
			<div><kbd class="kbd">Esc</kbd> to close</div>
			<div><kbd class="kbd">Tab</kbd> to navigate</div>
			<div><kbd class="kbd">Enter</kbd> to select</div>
		</footer>
	</div>
{/if}
