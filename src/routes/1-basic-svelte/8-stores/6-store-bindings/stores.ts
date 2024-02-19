import { derived, writable } from "svelte/store";

export const name = writable("Jhon Doe");

export const greeting = derived(name, ($name) => $name);
