interface User {
	id: string;
	name: string;
}

const users: User[] = [];

function getUsers(): User[] {
	return users;
}

function createUser(name: string): User {
	const user = {
		id: crypto.randomUUID(),
		name,
	};

	users.push(user);

	return user;
}

function deleteUser(userId: string): void {
	const index = users.findIndex((user) => user.id === userId);

	if (index !== -1) {
		users.splice(index, 1);
	}
}

export type { User };

export { users, getUsers, createUser, deleteUser };
