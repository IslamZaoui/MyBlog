<script lang="ts">
	import { page } from "$app/stores";
	import { languageTag as currentLang } from "$paraglide/runtime.js"
	import config from "$lib/config";
</script>

<svelte:head>
	<title>{config.name}</title>

	<meta
		content={currentLang() === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		name="description"
	/>
	<meta content={config.name} property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{$page.data.url.replace('/', '')}" property="og:url" />
	<meta
		content={currentLang() === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		property="og:description"
	/>
	<meta content={config.name} property="og:site_name" />
	<meta content="website" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={config.name} name="twitter:title" />
	<meta
		content={currentLang() === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		name="twitter:description"
	/>
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>