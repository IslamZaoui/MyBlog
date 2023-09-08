<script lang="ts">
	import { base } from '$app/paths';
	import {
		faFacebook,
		faGithub,
		faInstagram,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
</script>

<svelte:head>
	<title>Islam Zaoui</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<div class="flex flex-col gap-5 items-center">
		<Avatar src="{base}/asset/ME.jpg" width="w-[250px]" />
		<strong class="h1">Islam Zaoui</strong>
		<div>
			<p class="text-[18px] text-center">Junior Multi-Platform Apps and Web Developer 💻</p>
			<p class="text-[18px] text-center">Attended Université de M'sila 🇩🇿</p>
		</div>
		<span class="flex gap-4">
			<a
				class="hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="https://github.com/IslamZaoui"
				target="_blank"><Fa icon={faGithub} size="30" /></a
			>
			<a
				class="hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="https://www.linkedin.com/in/zaouiislam/"
				target="_blank"><Fa icon={faLinkedin} size="30" /></a
			>
			<a
				class="hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="https://www.facebook.com/IslamZaouii/"
				target="_blank"><Fa icon={faFacebook} size="30" /></a
			>
			<a
				class="hover:dark:text-tertiary-500 hover:text-tertiary-800"
				href="https://www.instagram.com/islamzaoui__/"
				target="_blank"><Fa icon={faInstagram} size="30" /></a
			>
		</span>
	</div>
</div>