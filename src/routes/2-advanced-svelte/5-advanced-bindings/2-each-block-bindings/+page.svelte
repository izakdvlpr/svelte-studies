<script lang="ts">
	interface Todo {
		done: boolean;
		text: string;
	}

	let todos: Todo[] = [
		{ done: false, text: 'learn svelte' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'ship it' }
	];

	function add(): void {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;
</script>

<h1>To Do</h1>

<ul>
	{#each todos as todo}
		<li class:done={todo.done}>
			<input type="checkbox" bind:checked={todo.done} />

			<input type="text" bind:value={todo.text} />
		</li>
	{/each}
</ul>

<p>{remaining} remaining</p>

<button on:click={add}>Add new</button>

<button on:click={clear}>Clear completed</button>
