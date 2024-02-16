<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<h1>Clicked {count}</h1>

{#if count > 10}
  <p>{count} is greater than 10</p>
{:else}
	<p>{count} is between 0 and 10</p>
{/if}

<button on:click={increment}>
  Click me
</button>