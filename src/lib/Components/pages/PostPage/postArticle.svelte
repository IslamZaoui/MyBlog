<script lang="ts">
	import { tocCrawler } from '@skeletonlabs/skeleton';

	export let content: any;
</script>

<article class="prose" dir="auto" use:tocCrawler={{ mode: 'generate' }}>
	<svelte:component this={content} />
</article>
