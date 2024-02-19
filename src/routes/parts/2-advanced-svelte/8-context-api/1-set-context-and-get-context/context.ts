import { getContext, setContext } from "svelte";
import { type Writable, writable } from "svelte/store";

export type Count = number;

export interface Context {
	count: Writable<Count>;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}

export const key = "count";

export function createCountContext(): void {
	const count = writable<Count>(0);

	setContext(key, {
		count,
		increment: () => count.update((n) => n + 1),
		decrement: () => count.update((n) => n - 1),
		reset: () => count.set(0),
	});
}

export function getCountContext(): Context {
	return getContext<Context>(key);
}
