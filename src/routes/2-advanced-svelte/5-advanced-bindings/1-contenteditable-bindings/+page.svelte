<script>
	let html = '<p>Hello World</p>';
</script>

<div bind:innerHTML={html} contenteditable />

<pre>{html}</pre>

<style>
	[contenteditable] {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px 0;
	}
</style>
