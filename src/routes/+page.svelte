<script lang="ts">
	import { base } from '$app/paths';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center mt-6">
	<div class="flex flex-col gap-5 items-center">
		<Avatar src="{base}/asset/ME.jpg" width="w-[250px]" />
		<strong class="h1">Zaoui Islam</strong>
		<pre class="text-[18px]">Junior Multi-Platform Apps Developer 💻</pre>
		<span class="flex gap-2">
			<a class="hover:text-tertiary-500" href="https://github.com/IslamZaoui" target="_blank"
				><iconify-icon icon="mdi:github" height="40"/></a
			>
			<a
				class="hover:text-tertiary-500"
				href="https://www.linkedin.com/in/zaouiislam/"
				target="_blank"><iconify-icon icon="mdi:linkedin" height="40"/></a
			>
			<a
				class="hover:text-tertiary-500"
				href="https://www.facebook.com/IslamZaouii/"
				target="_blank"><iconify-icon icon="ic:baseline-facebook" height="40"/></a
			>
			<a
				class="hover:text-tertiary-500"
				href="https://www.instagram.com/islamzaoui__/"
				target="_blank"><iconify-icon icon="mdi:instagram" height="40"/></a
			>
		</span>
	</div>
</div>
