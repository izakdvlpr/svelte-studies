type UserId = string;

interface Todo {
	id: string;
	description: string;
	done: boolean;
}

const todos = new Map<UserId, Todo[]>();

function getTodos(userId: UserId): Todo[] {
	if (!todos.get(userId)) {
		todos.set(userId, [
			{
				id: crypto.randomUUID(),
				description: "Learn SvelteKit",
				done: false,
			},
		]);
	}

	return todos.get(userId) as Todo[];
}

function createTodo(userId: UserId, description: string): void {
	if (description.trim() === "") {
		throw new Error("Todo must have a description.");
	}

	const userTodos = todos.get(userId);

	if (userTodos) {
		if (userTodos.find((todo) => todo.description === description)) {
			throw new Error("Todos must be unique.");
		}

		userTodos.push({
			id: crypto.randomUUID(),
			description,
			done: false,
		});
	}
}

function deleteTodo(userId: UserId, todoId: string): void {
	const userTodos = todos.get(userId);

	if (userTodos) {
		const index = userTodos.findIndex((todo) => todo.id === todoId);

		if (index !== -1) {
			userTodos.splice(index, 1);
		}
	}
}

export type { UserId, Todo };

export { todos, getTodos, createTodo, deleteTodo };
