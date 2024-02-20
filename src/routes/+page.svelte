<script>
  import {
    PUBLIC_THEME_BACKGROUND,
    PUBLIC_THEME_FOREGROUND,
  } from "$env/static/public";
  import { env } from "$env/dynamic/public";
</script>

<h1>Home</h1>
<p>This is the home page.</p>

<button
  style:background={PUBLIC_THEME_BACKGROUND}
  style:color={PUBLIC_THEME_FOREGROUND}
>
  {PUBLIC_THEME_FOREGROUND} on {PUBLIC_THEME_BACKGROUND}
</button>

<button
  style:background={env.PUBLIC_THEME_BACKGROUND}
  style:color={env.PUBLIC_THEME_FOREGROUND}
>
  {env.PUBLIC_THEME_FOREGROUND} on {env.PUBLIC_THEME_BACKGROUND}
</button>
