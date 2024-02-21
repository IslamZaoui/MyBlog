<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Youtube from 'lucide-svelte/icons/youtube';
	import Coffee from 'lucide-svelte/icons/coffee';
	import { Avatar } from '@skeletonlabs/skeleton';
	import config from '$lib/config';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import utils from '$lib/utils';

	const modalStore = getModalStore();

	export let data;

	async function onWindowKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			$modalStore.length
				? modalStore.close()
				: await utils.onShallowSearchSC(modalStore, data.Lang);
		}
	}
</script>

<svelte:window on:keydown|stopPropagation={async (e) => await onWindowKeydown(e)} />

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
		<Avatar src="/asset/avatar.webp" width="w-[260px]" alt="avatar" initials="IZ" />
		<h1><strong class="h1">Islam Zaoui</strong></h1>
		<div>
			<p class="text-[18px] text-center">{$LL.DISL1()}</p>
			<p class="text-[18px] text-center">{$LL.DISL2()}</p>
		</div>
		<span class="flex gap-4">
			<a
				class="mybtn"
				aria-label="github link"
				href={config.ProfileURL.github}
				rel="external"
				target="_blank"><Github size={40} /></a
			>
			<a
				class="mybtn"
				aria-label="linkedin link"
				href={config.ProfileURL.linkedin}
				rel="external"
				target="_blank"><Linkedin size={40} /></a
			>
			<a
				class="mybtn"
				aria-label="youtube link"
				href={config.ProfileURL.youtube}
				rel="external"
				target="_blank"><Youtube size={40} /></a
			>
			<a
				class="mybtn"
				aria-label="twitter link"
				href={config.ProfileURL.x}
				rel="external"
				target="_blank"><Twitter size={40} /></a
			>
			<a
				class="mybtn"
				aria-label="ko-fi link"
				href={config.ProfileURL.kofi}
				rel="external"
				target="_blank"><Coffee size={40} /></a
			>
		</span>
	</div>
</div>
