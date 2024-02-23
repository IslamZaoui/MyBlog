<script lang="ts">
	import { dev } from '$app/environment';
	import utils from '$lib/utils';
	import type { PageData } from './$types';
	import Post from '$lib/Components/PostPage';
	import { onMount } from 'svelte';
	import Button from '$lib/Components/Button';

	export let data: PageData;

	onMount(async () => {
		if (!dev) {
			await utils.increasePostViews(data.meta.slug);
		}
	});
</script>

<Post.Head {data} />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-[800px] space-y-10">
		<Post.Header post={data.meta} />
		<Post.Article content={data.content} />
	</div>
	<Button.ScrollToTop />
</div>
