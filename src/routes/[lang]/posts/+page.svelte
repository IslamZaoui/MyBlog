<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Paginator from './../../../lib/Components/Posts/Paginator.svelte';
	import { LL } from '$i18n/i18n-svelte';
	import type { PageData } from './$types';
	import PostCard from '$lib/Components/Posts/PostCard.svelte';
	import config from '$lib/config';
	import Button from '$lib/Components/Button';
	import utils from '$lib/utils';

	export let data: PageData;

	afterNavigate(() => {
		utils.ScrollToTop('smooth');
	});
</script>

<svelte:head>
	<title>{$LL.POSTS()} | {config.name}</title>

	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="description"
	/>

	<meta content="{$LL.POSTS()} | {config.name}" property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		property="og:description"
	/>
	<meta content={config.name} property="og:site_name" />
	<meta content="website" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{$LL.POSTS()} | {config.name}" name="twitter:title" />
	<meta
		content={data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="twitter:description"
	/>
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<main class="container h-full mx-auto flex justify-center items-centerselect-none relative">
	<div class="space-y-2 w-[700px]">
		<header class="flex flex-col gap-4 mb-8" dir={$LL.DIR()}>
			<h1><strong class="text-4xl">{$LL.POSTS()}</strong></h1>
			<a href="posts/rss.xml" class="text-xl myanchor w-fit" data-sveltekit-preload-data="off"
				>RSS</a
			>
		</header>
		<div class="grid grid-cols-1 gap-4">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
		<Paginator currentPage={data.page} hasMorePosts={data.hasMorePosts} />
	</div>
	<Button.ScrollToTop />
</main>
