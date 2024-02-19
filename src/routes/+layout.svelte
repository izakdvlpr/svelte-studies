<script>
  import "@/styles/global.css";

  import { page } from "$app/stores";

  import Navigation, { routes } from "@/components/Navigation.svelte";
</script>

{#if routes.some((route) => route.href === $page.url.pathname)}
  <Navigation />
{/if}

<slot />
