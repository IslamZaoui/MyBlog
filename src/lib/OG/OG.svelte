<script lang="ts">
	export let text: string;
</script>

<div class="card">
	<div class="text-center">{text}</div>
</div>

<style>
	.card {
		background: linear-gradient(to bottom right, #2a2e3e, #181922);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.text-center {
		text-align: center;
		font-size: 5.5rem;
		color: #b5bfe2;
	}
</style>
