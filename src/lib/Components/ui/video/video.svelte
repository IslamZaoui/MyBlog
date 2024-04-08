<script lang="ts">
	import Plyr from 'plyr';
	import 'plyr/dist/plyr.css';
	import { onMount } from 'svelte';

	let element: HTMLElement;

	onMount(() => {
		new Plyr(element);
	});

	export let src: string;
	export let alt: undefined | string = undefined;
</script>

<div class="py-2">
	<video {src} bind:this={element} class="aspect-video" playsinline controls data-poster={alt}>
		<track kind="captions" />
	</video>
</div>
