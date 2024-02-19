<script lang="ts">
	import List, { type Item } from './List.svelte';

	const users: Item[] = [
		{
			name: 'John'
		},
		{
			name: 'Jane'
		},
		{
			name: 'Jack'
		}
	];
</script>

<List items={users} let:item={user}>
	<h1>{user.name}</h1>
</List>
