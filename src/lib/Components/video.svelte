<script lang="ts">
	import 'vidstack/styles/defaults.css';
	import 'vidstack/styles/community-skin/video.css';
	import 'vidstack/define/media-player.js';

	import { defineCustomElements } from 'vidstack/elements';

	import { onMount } from 'svelte';

	onMount(() => {
		defineCustomElements();
	});
	export let src: string;
	export let poster: string | undefined;
	export let caption: string | undefined;
	export let chapters: string | undefined;
	export let title: string | undefined;
	export let description: string | undefined;
</script>

<media-player {title} {src} {poster} thumbnails="" aspect-ratio="16/9" crossorigin>
	<media-outlet>
		{#if description}
			<media-poster alt={description} />
		{/if}
		{#if caption}
			<track src={caption} label="English" srclang="en-US" kind="subtitles" default />
		{/if}
		{#if chapters}
			<track src={chapters} srclang="en-US" kind="chapters" default />
		{/if}
	</media-outlet>
	<media-community-skin />
</media-player>
