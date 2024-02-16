<script>
  let count = 0;

  $: doubled = count * 2;

  function increment() {
    count += 1;
  }
</script>

<h1>Clicked {count}</h1>

<p>{count} doubled is {doubled}</p>

<button on:click={increment}>
  Click me
</button>