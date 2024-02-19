<script lang="ts">
	let mouse = {
		x: 0,
		y: 0
	};
</script>

<div
	on:pointermove={(event) => {
		mouse = {
			x: event.clientX,
			y: event.clientY
		};
	}}
>
	The pointer is at {mouse.x} x {mouse.y}
</div>

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>
