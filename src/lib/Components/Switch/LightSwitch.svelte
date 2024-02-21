<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		modeOsPrefers,
		modeCurrent,
		setInitialClassState,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

	onMount(() => {
		if (!('modeCurrent' in localStorage)) {
			modeCurrent.set($modeOsPrefers);
		}
	});
</script>

<svelte:head>
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<button
	aria-label="light switch"
	type="button"
	class="hover:dark:text-tertiary-500 hover:text-tertiary-800"
	on:click={onToggleHandler}
>
	{#key $modeCurrent}
		<div in:fade>
			{#if $modeCurrent}
				<Sun size="24" />
			{:else}
				<Moon size="24" />
			{/if}
		</div>
	{/key}
</button>
