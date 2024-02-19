<script lang="ts" context="module">
	export interface Route {
		name: string;
		href: string;
	}

	export let routes: Route[] = [
		{ name: "home", href: "/" },
		{ name: "about", href: "/about" },
		{ name: "blog", href: "/blog" },
	];
</script>

<script>
	import { page } from "$app/stores";
</script>

<nav>
	{#each routes as { name, href }}
		<a {href} aria-current={$page.url.pathname === href}>{name}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: 0.5rem;
	}

	nav a {
		font-size: 1.2rem;
		text-decoration: none;
		color: inherit;
	}

	nav a[aria-current="true"] {
		border-bottom: 4px green solid;
	}
</style>
