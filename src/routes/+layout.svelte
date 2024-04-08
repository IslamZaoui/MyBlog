<script lang="ts">
	import '../app.postcss';

	import config from '$lib/config';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';

	export let data;

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Highlight JS
	import hljs from 'highlight.js/lib/core';

	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';
	import java from 'highlight.js/lib/languages/java';
	import python from 'highlight.js/lib/languages/python';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('java', java);
	hljs.registerLanguage('python', python);

	import 'highlight.js/styles/github-dark-dimmed.css';
	import { Modal, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// @ts-ignore
	import { gsap } from 'gsap/dist/gsap';
	// @ts-ignore
	import { Flip } from 'gsap/dist/Flip';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import type { AfterNavigate } from '@sveltejs/kit';

	gsap.registerPlugin(Flip);

	let state: Flip.FlipState;

	beforeNavigate(async () => {
		state = await Flip.getState('.postTitle, .postTags, .postDetails, .navA');
	});

	afterNavigate(async (params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		await Flip.from(state, {
			targets: '.postTitle, .postTags, .postDetails, .navA',
			duration: 0.3,
			scale: true,
			ease: 'power1.easeOut'
		});
	});

	import { goto } from '$app/navigation';
	import Layout from '$lib/Components/pages/Layout';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import utils from '$lib/utils';

	const modalStore = getModalStore();

	async function onWindowKeydown(e: KeyboardEvent) {
		if (data.url.includes('search')) return;
		if (innerWidth < 640) {
			goto(i18n.resolveRoute('/search'));
			return;
		}
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			$modalStore.length ? modalStore.close() : await utils.onShallowSearchSC(modalStore);
		}
	}
</script>

<Modal />

<svelte:head>
	<link rel="canonical" href="{config.url}{data.url.replace('/', '')}" />
</svelte:head>

<svelte:window on:keydown|stopPropagation={async (e) => await onWindowKeydown(e)} />

<ParaglideJS {i18n}>
	<AppShell on:scroll={utils.scrollHandler} scrollbarGutter="stable both-edges">
		<svelte:fragment slot="pageHeader">
			<Layout.pageHeader {data} />
		</svelte:fragment>

		<Layout.pageTransition url={data.url}>
			<slot />
		</Layout.pageTransition>

		<svelte:fragment slot="pageFooter">
			<Layout.pageFooter />
		</svelte:fragment>
	</AppShell>
</ParaglideJS>
