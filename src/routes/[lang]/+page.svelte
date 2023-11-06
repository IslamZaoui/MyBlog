<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import Icon from '@iconify/svelte';
	import kofiIcon from '@iconify/icons-simple-icons/kofi';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>

	<meta content={config.Sitedescription} name="description" />

	<meta content={config.title} property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content="{config.url}{data.url.replace('/','')}" property="og:url" />
	<meta content={config.Sitedescription} property="og:description" />
	<meta content={config.title} property="og:site_name" />

	<!-- <meta content={config.twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={config.title} name="twitter:title" />
	<meta content={config.Sitedescription} name="twitter:description" />
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
			<a class="text-[30px] mybtn" href="https://github.com/IslamZaoui" rel="external" target="_blank"
				><Fa icon={faGithub} size="30" /></a
			>
			<a class="text-[30px] mybtn" href="https://www.linkedin.com/in/zaouiislam/" rel="external" target="_blank"
				><Fa icon={faLinkedin} size="30" /></a
			>
			<a class="text-[30px] mybtn" href="https://www.youtube.com/@IslamZaoui_" rel="external" target="_blank"
				><Fa icon={faYoutube} size="30" /></a
			>
			<a class="text-[30px] mybtn" href="https://www.instagram.com/islamzaoui__/" rel="external" target="_blank"
				><Fa icon={faInstagram} /></a
			>
			<a class="mybtn" href="https://ko-fi.com/islamzaoui" rel="external" target="_blank"
				><Icon icon={kofiIcon} width="33" height="33" /></a
			>
		</span>
	</div>
</div>
