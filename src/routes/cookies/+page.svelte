<script lang="ts">
  import type { CookiesLoadData } from "./+page.server.ts";

  export let data: CookiesLoadData;
</script>

<h1>Hello {data.visited ? "friend" : "stranger"}!</h1>
