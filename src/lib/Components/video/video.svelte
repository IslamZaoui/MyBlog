<script lang="ts">
	import { onMount } from 'svelte';

	export let type: 'youtube' | 'video';
	export let src: string;
	export let poster: string | undefined;
</script>

{#if type === 'video'}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class="player aspect-video" playsinline controls data-poster={poster}>
		<source {src} />
	</video>
{:else if type === 'youtube'}
	<div id="player" data-plyr-provider="youtube" data-plyr-embed-id={src} />
{/if}
