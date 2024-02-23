<script lang="ts">
	import Layout from '$lib/Components/Layout';
	import { AppShell } from '@skeletonlabs/skeleton';import { getModalStore } from '@skeletonlabs/skeleton';
	import utils from '$lib/utils';

	const modalStore = getModalStore();

	export let data;

	async function onWindowKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			$modalStore.length
				? modalStore.close()
				: await utils.onShallowSearchSC(modalStore, data.Lang);
		}
	}
</script>

<svelte:window on:keydown|stopPropagation={async (e) => await onWindowKeydown(e)} />

<AppShell on:scroll={utils.scrollHandler}>
	<svelte:fragment slot="pageHeader">
		<Layout.pageHeader {data} />
	</svelte:fragment>

	<Layout.pageTransition url={data.url}>
		<slot />
	</Layout.pageTransition>

	<svelte:fragment slot="pageFooter">
		<Layout.pageFooter />
	</svelte:fragment>
</AppShell>
