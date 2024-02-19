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
	<div slot="header">
		<h1>Users</h1>
	</div>

	<p>{user.name}</p>
</List>
