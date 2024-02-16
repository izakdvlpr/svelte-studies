<script>
  let count = 0;

  $: console.log(`the count is ${count}`);

  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes`);
  }

  $: if (count >= 10) {
    alert('count is dangerously high!');

    count = 0;
  }

  function increment() {
    count += 1;
  }
</script>

<h1>Clicked {count}</h1>

<button on:click={increment}>
  Click me
</button>