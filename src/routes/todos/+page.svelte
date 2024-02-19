<script lang="ts">
  import { fly, slide } from "svelte/transition";

  import { enhance } from "$app/forms";

  import type { TodosActionCreateError, TodosLoadData } from "./+page.server";

  export let data: TodosLoadData;
  export let form: TodosActionCreateError;

  let creating: boolean = false;
  let deleting: string[] = [];
</script>

<div class="container">
  <h1>To do</h1>

  <form
    method="POST"
    action="?/create"
    use:enhance={() => {
      creating = true;

      return async ({ update }) => {
        await update();

        creating = false;
      };
    }}
  >
    <label>
      Add a todo:
      <input
        name="description"
        value={form?.data?.description ?? ""}
        disabled={creating}
        autocomplete="off"
        required
      />
    </label>

    {#if form?.error}
      <p class="error">{form.error.message}</p>
    {/if}
  </form>

  <ul>
    {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
      <li in:fly={{ y: 20 }} out:slide>
        <form
          method="POST"
          action="?/delete"
          use:enhance={() => {
            deleting = [...deleting, todo.id];
            return async ({ update }) => {
              await update();

              deleting = deleting.filter((id) => id !== todo.id);
            };
          }}
        >
          <input type="hidden" name="id" value={todo.id} />

          {todo.description}

          <button>X</button>
        </form>
      </li>
    {/each}
  </ul>

  {#if creating}
    <span class="saving">saving...</span>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .error {
    color: red;
  }

  .saving {
    opacity: 0.5;
  }
</style>
