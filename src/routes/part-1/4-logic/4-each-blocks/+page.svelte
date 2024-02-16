<script>
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
</script>

<h1 style="color: {selected}">Pick a colour</h1>

<div>
  {#each colors as color, index}
    <button
      aria-current={selected === color}
      aria-label={color}
      style="background: {color}"
      on:click={() => selected = color}
    >
      {index + 1}
    </button>
  {/each}
</div>

<style>
	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 4px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
    border: none;
    outline: none;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
    border: 4px solid #000;
	}
</style>