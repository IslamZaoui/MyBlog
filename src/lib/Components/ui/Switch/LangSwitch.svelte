<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { i18n } from '$lib/i18n.js';
	import { languageTag } from '$paraglide/runtime.js';
	import { invalidateAll } from '$app/navigation';

	$: lang = languageTag() === 'en' ? 'ar' : 'en';
</script>

<div class="hover:dark:text-tertiary-500 hover:text-tertiary-800">
	{#key lang}
		<div in:fade>
			<a
				on:click={() => invalidateAll()}
				aria-label="change language to {lang}"
				href={i18n.route($page.url.pathname)}
				rel="alternate"
				hreflang={lang}>{lang.toLocaleUpperCase()}</a
			>
		</div>
	{/key}
</div>
