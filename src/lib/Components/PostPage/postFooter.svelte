<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Edit from 'lucide-svelte/icons/file-pen-line';
	import External from 'lucide-svelte/icons/external-link';
	import utils from '$lib/utils';
	import type { Locales } from '$i18n/i18n-types';
	import NextpervPosts from './nextpervPosts.svelte';

	export let slug: string;
	export let Lang: Locales;
	export let posts: nextprevPosts;
</script>

<footer class="flex flex-col gap-10 select-none">
	<section>
		<NextpervPosts {posts}/>
	</section>
	<section
		class="w-full border-4 border-surface-900-50-token rounded-2xl p-8 relative"
		dir={$LL.DIR()}
	>
		<div class="flex gap-2 flex-col mb-5">
			<span class="text-2xl font-bold">{$LL.EDITTITLE()}</span>
			<p>
				{$LL.EDITDESC()}
			</p>
		</div>
		<a
			href={utils.getGithubPostURL(slug, Lang)}
			class="myanchor flex gap-2"
			rel="external"
			target="_blank"
			aria-label="edit on github"><External />{$LL.EDITLINK()}</a
		>
		<i class="absolute -top-4 -left-4 rounded-full variant-filled p-2"><Edit /></i>
	</section>
</footer>
