<script lang="ts" context="module">
	export interface Item {
		name: string;
	}
</script>

<script lang="ts">
	export let items: Item[];
</script>

<ul>
	{#if $$slots.header}
		<slot name="header" />
	{/if}

	{#each items as item}
		<li>
			<slot {item} />
		</li>
	{/each}
</ul>
