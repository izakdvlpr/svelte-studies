import { json } from "@sveltejs/kit";

import { createUser } from "@/lib/database/user";

export async function POST({ request }) {
	const { name } = await request.json();

	const user = createUser(name);

	return json(
		{
			user,
		},
		{
			status: 201,
		},
	);
}
