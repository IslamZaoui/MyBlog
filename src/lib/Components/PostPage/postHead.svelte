<script lang='ts'>
	import config from "$lib/config";

	export let data: { meta: Post; url: string };
</script>

<svelte:head>
    <title>{data.meta.title} | {config.name}</title>
	<meta content={data.meta.description} name="description" />

	<meta content="{data.meta.title} | {config.name}" property="og:title" />
	<meta content="{config.url}API/OG/{data.meta.title.replace(/ /g, '%20')}" property="og:image" />
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta content={data.meta.description} property="og:description" />
	<meta content={config.name} property="og:site_name" />
	<meta content="article" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{data.meta.title} | {config.name}" name="twitter:title" />
	<meta content={data.meta.description} name="twitter:description" />
	<meta content="{config.url}API/OG/${data.meta.title.replace(/ /g, '%20')}" name="twitter:image" />
</svelte:head>