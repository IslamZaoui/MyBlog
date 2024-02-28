<script lang="ts">
	import config from '$lib/config';
	import { LL } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$LL.POSTS()} | {config.name}</title>

	<meta
		content={$page.data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="description"
	/>

	<meta content="{$LL.POSTS()} | {config.name}" property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{$page.data.url.replace('/', '')}" property="og:url" />
	<meta
		content={$page.data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		property="og:description"
	/>
	<meta content={config.name} property="og:site_name" />
	<meta content="website" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="{$LL.POSTS()} | {config.name}" name="twitter:title" />
	<meta
		content={$page.data.Lang === 'en' ? config.Postdescription : config.PostdescriptionAR}
		name="twitter:description"
	/>
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>
