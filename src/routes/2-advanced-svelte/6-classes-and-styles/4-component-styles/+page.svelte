<script>
	import Box from './Box.svelte';
</script>

<div class="boxes">
	<Box --color="red" />
	<Box --color="yellow" />
	<Box --color="green" />
</div>

<style>
	.boxes {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
