<script lang="ts">
	import { base } from '$app/paths';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { UilGithub, UilLinkedin, UilFacebook, UilInstagram } from 'svelte-unicons';
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<div class="flex flex-col gap-5 items-center">
		<Avatar src="{base}/asset/ME.jpg" width="w-[250px]" />
		<strong class="h1">Zaoui Islam</strong>
		<pre class='text-[18px]'>Junior Multi-Platform Apps Developer 💻</pre>
		<span class='flex gap-2'>
			<a class='hover:text-tertiary-500' href="https://github.com/IslamZaoui" target='_blank'><UilGithub size='35'/></a>
			<a class='hover:text-tertiary-500' href="https://www.linkedin.com/in/zaouiislam/" target='_blank'><UilLinkedin size='35'/></a>
			<a class='hover:text-tertiary-500' href="https://www.facebook.com/IslamZaouii/" target='_blank'><UilFacebook size='35'/></a>
			<a class='hover:text-tertiary-500' href="https://www.instagram.com/islamzaoui__/" target='_blank'><UilInstagram size='35'/></a>
		</span>
	</div>
</div>
