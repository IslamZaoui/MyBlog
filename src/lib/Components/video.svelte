<script lang="ts">
	//import '@mux-elements/mux-video'

	export let src: string;

	let duration;
	let videoWidth;
	let videoHeight;
	let muxVideoEl: { duration: any; videoWidth: any; videoHeight: any };

	const onloadedmetadata = () => {
		if (muxVideoEl) {
			duration = muxVideoEl.duration;
			videoWidth = muxVideoEl.videoWidth;
			videoHeight = muxVideoEl.videoHeight;
		}
	};
</script>

<svelte:head>
	<script src="https://unpkg.com/@mux-elements/mux-video@0.2.0/dist/index.js"></script>
</svelte:head>

<mux-video
	bind:this={muxVideoEl}
	{src}
	controls
	preload="metadata"
	on:play
	on:pause
	on:loadedmetadata={onloadedmetadata}
	on:ended
	class="h-[200px]"
/>

<style global>
	mux-video {
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
</style>
