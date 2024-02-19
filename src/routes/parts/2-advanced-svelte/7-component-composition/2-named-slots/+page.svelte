<script>
	import Card from './Card.svelte';
</script>

<Card>
	<nav slot="header">
		<h1>Header</h1>

		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</nav>

	<div>
		<h1>Title</h1>
		<p>Content</p>
	</div>

	<footer slot="footer">
		<pre>Footer</pre>
	</footer>
</Card>
