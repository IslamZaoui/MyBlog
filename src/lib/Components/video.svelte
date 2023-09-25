<script lang="ts">
	import Plyr from 'plyr';
	import { onMount } from 'svelte';

	onMount(() => {
		new Plyr('#player');
	});
	export let src: string;
	export let thumbnail: string | undefined;
	export let caption: string | undefined;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="player" playsinline controls data-poster={thumbnail}>
	<source {src} type="video/mp4" />
	{#if caption}
		<track kind="captions" label="English captions" src={caption} srclang="en" default />
	{/if}
</video>

