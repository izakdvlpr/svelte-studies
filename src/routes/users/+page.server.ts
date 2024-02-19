import { type User, getUsers } from "@/lib/database/user";

export interface UsersLoadData {
	users: User[];
}

export function load(): UsersLoadData {
	const users = getUsers();

	return {
		users,
	};
}
