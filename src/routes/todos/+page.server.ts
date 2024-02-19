import { fail } from "@sveltejs/kit";

import {
	type Todo,
	createTodo,
	deleteTodo,
	getTodos,
} from "@/lib/database/todo";

export interface TodosLoadData {
	todos: Todo[];
}

export interface TodosActionCreateError {
	error: {
		message: string;
	};
	data: {
		description?: string;
	};
}

export function load({ cookies }): TodosLoadData {
	let userId = cookies.get("userId");

	if (!userId) {
		userId = crypto.randomUUID();

		cookies.set("userId", userId, { path: "/" });
	}

	const todos = getTodos(userId);

	return {
		todos,
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const data = await request.formData();

		try {
			const userId = cookies.get("userId") as string;
			const description = data.get("description") as string;

			createTodo(userId, description);
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			return fail(422, {
				error: {
					message: error.message,
				},
				data: {
					description: data.get("description"),
				},
			});
		}
	},
	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const data = await request.formData();

		const userId = cookies.get("userId") as string;
		const todoId = data.get("id") as string;

		deleteTodo(userId, todoId);
	},
};
