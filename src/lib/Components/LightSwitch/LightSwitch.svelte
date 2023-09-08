<script lang="ts">
	import { onMount } from 'svelte';
	import {
		modeOsPrefers,
		modeCurrent,
		setInitialClassState,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

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
		<Fa icon={faMoon} size="18" />
	{:else}
		<Fa icon={faSun} size="18" />
	{/if}
</button>
