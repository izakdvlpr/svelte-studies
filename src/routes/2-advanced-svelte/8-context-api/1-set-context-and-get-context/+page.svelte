<script>
	import Card from './Card.svelte';
	import { createCountContext, getCountContext } from './context';

	createCountContext();

	const { count } = getCountContext();
</script>

<h1>The count is {$count}</h1>

<Card />
