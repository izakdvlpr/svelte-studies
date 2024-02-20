<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<nav>
  <a href="/languages/">default</a>
  <a href="/languages/he">שלום</a>
  <a href="/languages/es">Hola</a>
  <a href="/languages/pt">Olá</a>
  <a href="/languages/en">Hello</a>
</nav>

<h1>{data.language}</h1>
