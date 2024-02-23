<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Youtube from 'lucide-svelte/icons/youtube';
	import Coffee from 'lucide-svelte/icons/coffee';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Head from '$lib/Components/Page/baseHead.svelte';
	import config from '$lib/config';
</script>

<Head />

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
