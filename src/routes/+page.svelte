<script lang="ts">
	import * as config from '$lib/config';
</script>

<svelte:head>
    <title>{config.title}</title>

    <meta content="{config.Sitedescription}" name="description" />

    <meta content="{config.title}" property="og:title" />
    <meta content="{config.siteImage}" property="og:image" />
    <meta content="{config.url}" property="og:url" />
    <meta content="{config.Sitedescription}" property="og:description" />
    <meta content="{config.title}" property="og:site_name" />
    <meta content="website" property="og:type" />

    <!-- <meta content="{config.twitterHandle}" name="twitter:creator" -->
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="{config.title}" name="twitter:title" />
    <meta content="{config.Sitedescription}" name="twitter:description" />
    <meta content="{config.siteImage}" name="twitter:image" />
</svelte:head>

