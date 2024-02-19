<script lang="ts">
	import { getRandomNumber, type GetRandomNumberResponse } from './utils';

	let promise: Promise<GetRandomNumberResponse> = getRandomNumber();

	function handleClick(): void {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
	<p>...waiting</p>
{:then data}
	<p>The number is {data.number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
