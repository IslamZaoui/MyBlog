<script lang="ts">
	import * as LL from '$paraglide/messages';
	import Edit from 'lucide-svelte/icons/file-pen-line';
	import External from 'lucide-svelte/icons/external-link';
	import utils from '$lib/utils';
	import NextpervPosts from './nextpervPosts.svelte';
	import { languageTag as currentLang } from '$paraglide/runtime.js';

	export let slug: string;
	export let posts: nextprevPosts;
</script>

<footer class="flex flex-col gap-10 select-none">
	<NextpervPosts {posts} />
	<section class="w-full border-4 border-surface-900-50-token rounded-2xl p-8 relative">
		<div class="flex gap-2 flex-col mb-5">
			<span class="text-2xl font-bold">{LL.EDITTITLE()}</span>
			<p>
				{LL.EDITDESC()}
			</p>
		</div>
		<a
			href={utils.getGithubPostURL(slug, currentLang())}
			class="myanchor flex gap-2"
			rel="external"
			target="_blank"
			aria-label="edit on github"><External />{LL.EDITLINK()}</a
		>
		<i class="absolute -top-4 -left-4 rounded-full variant-filled p-2"><Edit /></i>
	</section>
</footer>
