<script lang="ts">
	import config from '$lib/config';
	import utils from '$lib/utils';
	import * as LL from '$paraglide/messages';
</script>

<nav
	class="flex md:flex-row flex-col justify-center w-full text-center p-6 text-[12px] md:gap-3 select-none mt-5"
>
	<div class="space-x-2">
		<span>© {utils.getCurrentYear()} Islam Zaoui</span>
		<a
			class="myanchor"
			href="https://creativecommons.org/licenses/by-sa/4.0/"
			rel="license"
			target="_blank">CC BY-SA</a
		>
	</div>
	<span
		>{LL.POWERED()}
		<a class="myanchor" href="https://kit.svelte.dev/" target="_blank" rel="external">Sveltekit</a>
		{LL.AND()}
		<a class="myanchor" href="https://skeleton.dev/" target="_blank" rel="external">Skeleton</a>.
	</span>
	<span>
		{LL.CONTACTEMAIL()}
		<a class="myanchor" href="mailto:{config.contactEmail}">{config.contactEmail}</a>
	</span>
</nav>
