<script lang="ts">
  import "@/styles/global.css";

  import { page } from "$app/stores";

  import Navigation, { routes } from "@/components/Navigation.svelte";
</script>

{#if routes.some((route) => route.href === $page.url.pathname) || $page.url.pathname.startsWith("/blog")}
  <Navigation />
{/if}

<slot />
