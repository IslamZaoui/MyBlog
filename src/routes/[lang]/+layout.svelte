<script lang="ts">
	import { scrollHandler } from '$lib';
	import Layout from '$lib/Components/Layout';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data;
</script>

<AppShell on:scroll={scrollHandler}>
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
