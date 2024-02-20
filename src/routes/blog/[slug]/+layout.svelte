<script lang="ts">
  import type { PageData } from "../$types";

  export let data: PageData;
</script>

<div class="layout">
  <main>
    <slot />
  </main>

  <aside>
    <h2>More posts</h2>
    <ul>
      {#each data.posts as { slug, title }}
        <li>
          <a href="/blog/{slug}">{title}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  .layout {
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 16em;
  }
</style>
