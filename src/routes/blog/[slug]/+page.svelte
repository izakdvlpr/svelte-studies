<script lang="ts">
  import type { BlogSlugLoadData } from "./+page.server";

  export let data: BlogSlugLoadData;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
