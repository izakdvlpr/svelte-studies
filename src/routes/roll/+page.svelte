<script lang="ts">
  let number: number | null = null;

  async function roll() {
    const response = await fetch("/roll/api");

    const data = await response.json();

    number = data.number;
  }
</script>

<button on:click={roll}>Roll the dice</button>

{#if number !== null}
  <p>You rolled a {number}</p>
{/if}
