<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import SearchPage from '../../../routes/[lang]/search/+page.svelte';
	import LL from '$i18n/i18n-svelte';

	const modalStore = getModalStore();

	export let data: any;
</script>

{#if $modalStore[0]}
	<div
		class="card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 p-4 mb-auto space-y-4"
	>
		<SearchPage {data} />
		<footer class="flex gap-3" dir={$LL.DIR()}>
			<div><kbd class="kbd">Esc</kbd> {$LL.CLOSE()}</div>
			<div><kbd class="kbd">Tab</kbd> {$LL.NAV()}</div>
			<div><kbd class="kbd">Enter</kbd> {$LL.SELECT()}</div>
		</footer>
	</div>
{/if}
