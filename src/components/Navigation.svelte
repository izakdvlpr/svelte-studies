<script lang="ts" context="module">
	export interface Route {
		name: string;
		href: string;
		isPreloadData: boolean;
	}

	export let routes: Route[] = [
		{ name: "home", href: "/", isPreloadData: false },
		{ name: "about", href: "/about", isPreloadData: true },
		{ name: "blog", href: "/blog", isPreloadData: false },
	];
</script>

<script lang="ts">
	import { page } from "$app/stores";
</script>

<nav>
	{#each routes as { name, href, isPreloadData }}
		<a
			{href}
			data-sveltekit-preload-data={isPreloadData ? "hover" : false}
			aria-current={$page.url.pathname === href ||
				(href === "/blog" && $page.url.pathname.startsWith("/blog"))}
		>
			{name}
		</a>
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
