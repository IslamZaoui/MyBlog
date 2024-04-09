<script lang="ts">
	import Plyr from 'plyr';
	import { onMount } from 'svelte';

	let element: HTMLElement;

	onMount(() => {
		new Plyr(element);
	});

	export let src: string;
	export let alt: undefined | string = undefined;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>

<div class="py-2">
	<video {src} bind:this={element} class="aspect-video" playsinline controls data-poster={alt}>
		<track kind="captions" />
	</video>
</div>
