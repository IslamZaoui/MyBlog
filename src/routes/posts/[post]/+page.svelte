<script lang="ts">
	import { dev } from '$app/environment';
	import utils from '$lib/utils';
	import type { PageData } from './$types';
	import Post from '$lib/Components/pages/PostPage';
	import { onMount } from 'svelte';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import Button from '$lib/Components/ui/Button';
	import maxappScroll from '$lib/stores/maxappscroll';
	import appScroll from '$lib/stores/appscroll';

	export let data: PageData;

	onMount(async () => {
		if (!dev) {
			await utils.increasePostViews(data.meta.slug);
		}
	});
</script>

<Post.Head {data} />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-[900px] space-y-10">
		<Post.Header post={data.meta} />
		<Post.Article content={data.content} />
		<hr class="!border-t-2" />
		<Post.Footer slug={data.meta.slug} posts={data.posts} />
	</div>
	<Button.ScrollToTop />
	<ProgressBar
		label="Progress Bar"
		value={$appScroll}
		max={$maxappScroll}
		class="fixed z-99 bottom-0"
		rounded="rounded-none"
	/>
</div>
