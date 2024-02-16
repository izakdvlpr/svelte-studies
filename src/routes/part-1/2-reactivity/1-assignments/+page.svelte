<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<h1>Clicked {count}</h1>

<button on:click={increment}>
  Click me
</button>