<script lang="ts">
	import Plyr from 'plyr';
	import { onMount } from 'svelte';

	onMount(() => {
		new Plyr('.player');
	});

	export let type: 'youtube' | 'video';
	export let src: string;
	export let poster: string | undefined;
</script>

<div class="w-full flex justify-center items-center">
	{#if type === 'video'}
		<video {src} controls>
			<track kind="captions" />
		</video>
	{:else if type === 'youtube'}
		<div id="player" data-plyr-provider="youtube" data-plyr-embed-id={src} />
	{/if}
</div>
