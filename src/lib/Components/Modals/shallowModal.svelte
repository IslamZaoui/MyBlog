<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	export let component: any;
	export let data: any;

</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl">
		<svelte:component this={component} {data} />
	</div>
{/if}
