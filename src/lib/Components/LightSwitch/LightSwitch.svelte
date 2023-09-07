<script lang="ts">
	import { onMount } from 'svelte';
	import {
		modeOsPrefers,
		modeCurrent,
		setInitialClassState,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';

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

<button class="hover:text-tertiary-500" on:click={onToggleHandler}>
	{#if $modeCurrent}
		<iconify-icon icon="akar-icons:moon" height='24'/>
	{:else}
		<iconify-icon icon="ph:sun-bold" height='24'/>
	{/if}
</button>
