<script lang="ts">
	import * as LL from '$paraglide/messages';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Youtube from 'lucide-svelte/icons/youtube';
	import Coffee from 'lucide-svelte/icons/coffee';
	import Head from '$lib/Components/pages/head/baseHead.svelte';
	import config from '$lib/config';
	import avatar from '$asset/avatar.webp?format=avif&as=metadata';
</script>

<Head />

<div class="container h-full mx-auto flex justify-center items-center select-none">
	<div class="flex flex-col gap-5 items-center">
		<img
			src={avatar.src}
			class="rounded-full sm:size-[260px] size-[160px]"
			width={avatar.width}
			height={avatar.height}
			alt="avatar"
		/>
		<h1><strong class="h1">Islam Zaoui</strong></h1>
		<div>
			<p class="text-[18px] text-center">{LL.DISL1()}</p>
			<p class="text-[18px] text-center">{LL.DISL2()}</p>
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
