<script lang="ts">
	import Plyr from 'plyr';
	import { onMount } from 'svelte';

	let element: HTMLElement;
	let link: HTMLLinkElement;

	onMount(() => {
		new Plyr(element);
	});

	export let src: string;
	export let alt: undefined | string = undefined;
</script>

<svelte:head>
	<link
		bind:this={link}
		rel="stylesheet"
		href="https://cdn.plyr.io/3.7.8/plyr.css"
		media="print"
		on:load={() => {
			link.onload = null;
			link.media = 'all';
		}}
	/>
	<noscript>
		<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
	</noscript>
</svelte:head>

<div class="py-2">
	<video {src} bind:this={element} class="aspect-video" playsinline controls data-poster={alt}>
		<track kind="captions" />
	</video>
</div>
