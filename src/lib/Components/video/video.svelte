<script lang="ts">
	import Plyr from 'plyr';
	import { onMount } from 'svelte';

	let element: HTMLElement;

	onMount(() => {
		new Plyr(element);
	});

	export let type: 'youtube' | 'video';
	export let src: string;
	export let poster: string | undefined;
</script>

<div class="py-2">
	{#if type === 'video'}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video bind:this={element} class="aspect-video" playsinline controls data-poster={poster}>
			<source {src} />
		</video>
	{:else if type === 'youtube'}
		<div class="plyr__video-embed" bind:this={element}>
			<iframe title='video player' {src} allowfullscreen allowtransparency allow="autoplay"></iframe>
		</div>
	{/if}
</div>
