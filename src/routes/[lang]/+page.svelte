<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import {
		faFacebook,
		faGithub,
		faInstagram,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import Icon from '@iconify/svelte';
	import kofiIcon from '@iconify/icons-simple-icons/kofi';
</script>

<svelte:head>
	<title>Islam Zaoui</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center select-none">
	<div class="flex flex-col gap-5 items-center">
		<Avatar src="{base}/asset/avatar.webp" width="w-[250px]" />
		<strong class="h1">Islam Zaoui</strong>
		<div>
			<p class="text-[18px] text-center">{$LL.DISL1()}</p>
			<p class="text-[18px] text-center">{$LL.DISL2()}</p>
		</div>
		<span class="flex gap-4">
			<a
				class="text-[30px] mybtn"
				href="https://github.com/IslamZaoui"
				target="_blank"><Fa icon={faGithub} size="30" /></a
			>
			<a
				class="text-[30px] mybtn"
				href="https://www.linkedin.com/in/zaouiislam/"
				target="_blank"><Fa icon={faLinkedin} size="30" /></a
			>
			<a
				class="text-[30px] mybtn"
				href="https://www.facebook.com/IslamZaouii/"
				target="_blank"><Fa icon={faFacebook} size="30" /></a
			>
			<a
				class="text-[30px] mybtn"
				href="https://www.instagram.com/islamzaoui__/"
				target="_blank"><Fa icon={faInstagram} /></a
			>
			<a
				class="mybtn"
				href="https://ko-fi.com/islamzaoui"
				target="_blank"><Icon icon={kofiIcon} width="33" height="33" /></a
			>
		</span>
	</div>
</div>
