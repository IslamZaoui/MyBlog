<script lang="ts">
	export let id: string;

	$: embedUrl = `https://www.youtube.com/embed/${id}`;
</script>

<div class="relative" style="padding-top: 56.25%;">
	<iframe
		title="YouTube video"
		class="absolute inset-0 w-full h-full"
		src={embedUrl}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>
