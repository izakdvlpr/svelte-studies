<script>
  export let data;
</script>

<h1>Blog</h1>

<ul>
  {#each data.posts as { slug, title }}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>
