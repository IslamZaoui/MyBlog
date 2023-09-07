<script lang="ts">
	import { onMount } from 'svelte';
	import {
		modeOsPrefers,
		modeCurrent,
		setInitialClassState,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';

    import { UilSun, UilMoon } from 'svelte-unicons'

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

<button class="p-1 hover:text-tertiary-500" on:click={onToggleHandler}>
	{#if $modeCurrent}
		<UilMoon/>
	{:else}
		<UilSun/>
	{/if}
</button>
