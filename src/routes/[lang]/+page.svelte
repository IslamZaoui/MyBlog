<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { faGithub, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import Icon from '@iconify/svelte';
	import kofiIcon from '@iconify/icons-simple-icons/kofi';
	import config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{data.Lang === 'en' ? config.name : config.name}</title>

	<meta
		content={data.Lang === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		name="description"
	/>
	<meta content={data.Lang === 'en' ? config.name : config.name} property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{data.url.replace('/', '')}" property="og:url" />
	<meta
		content={data.Lang === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		property="og:description"
	/>
	<meta content={config.name} property="og:site_name" />
	<meta content="website" property="og:type" />

	<meta content={config.xHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.Lang === 'en' ? config.name : config.name} name="twitter:title" />
	<meta
		content={data.Lang === 'en' ? config.Sitedescription : config.SitedescriptionAR}
		name="twitter:description"
	/>
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center select-none">
	<div class="flex flex-col gap-5 items-center">
		<Avatar src="{base}/asset/avatar.webp" width="w-[250px]" alt="avatar" />
		<h1><strong class="h1">Islam Zaoui</strong></h1>
		<div>
			<p class="text-[18px] text-center">{$LL.DISL1()}</p>
			<p class="text-[18px] text-center">{$LL.DISL2()}</p>
		</div>
		<span class="flex gap-4">
			<a class="text-[30px] mybtn" href={config.ProfileURL.github} rel="external" target="_blank"
				><Fa icon={faGithub} /></a
			>
			<a class="text-[30px] mybtn" href={config.ProfileURL.linkedin} rel="external" target="_blank"
				><Fa icon={faLinkedin} /></a
			>
			<a class="text-[30px] mybtn" href={config.ProfileURL.youtube} rel="external" target="_blank"
				><Fa icon={faYoutube} /></a
			>
			<a class="text-[30px] mybtn" href={config.ProfileURL.x} rel="external" target="_blank"
				><Fa icon={faXTwitter} /></a
			>
			<a class="mybtn" href={config.ProfileURL.kofi} rel="external" target="_blank"
				><Icon icon={kofiIcon} width="33" height="33" /></a
			>
		</span>
	</div>
</div>
