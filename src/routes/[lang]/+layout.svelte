<script lang="ts">
	import utils from '$lib/utils';
	import Layout from '$lib/Components/Layout';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data;
</script>

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
