import { json } from "@sveltejs/kit";

import { deleteUser } from "@/lib/database/user";

export async function DELETE({ params }) {
	const user = deleteUser(params.userId);

	return json(
		{
			user,
		},
		{
			status: 201,
		},
	);
}
