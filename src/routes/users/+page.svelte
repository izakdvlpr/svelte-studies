<script lang="ts">
  import { fly, slide } from "svelte/transition";

  import type { UsersLoadData } from "./+page.server";

  export let data: UsersLoadData;
</script>

<div class="container">
  <h1>Users</h1>

  <label>
    Add a user:
    <input
      type="text"
      name="name"
      autocomplete="off"
      on:keydown={async (e) => {
        if (e.key !== "Enter") {
          return;
        }

        const input = e.currentTarget;
        const name = input.value;

        const response = await fetch("/users/api", {
          method: "POST",
          body: JSON.stringify({ name }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { user } = await response.json();

        data.users = data.users.concat(user);

        input.value = "";
      }}
    />
  </label>

  <ul>
    {#each data.users as user (user.id)}
      <li in:fly={{ y: 20 }} out:slide>
        {user.name}

        <button
          on:click={async () => {
            await fetch(`/users/api/${user.id}`, {
              method: "DELETE",
            });

            data.users = data.users.filter((u) => u !== user);
          }}
        >
          X
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
