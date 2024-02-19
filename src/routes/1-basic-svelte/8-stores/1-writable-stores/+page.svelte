<script lang="ts">
	import { count } from './stores';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let countValue: number;

	count.subscribe((value) => {
		countValue = value;
	});
</script>

<h1>The count is {countValue}</h1>

<Incrementer />
<Decrementer />
<Resetter />
