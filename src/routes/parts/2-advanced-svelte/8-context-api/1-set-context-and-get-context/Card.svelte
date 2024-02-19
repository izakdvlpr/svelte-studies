<script>
	import { getCountContext } from './context';

	const { increment, decrement, reset } = getCountContext();
</script>

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>
