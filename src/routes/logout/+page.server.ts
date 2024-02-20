import { redirect } from "@sveltejs/kit";

export const actions = {
	default: ({ cookies }) => {
		cookies.delete("loggedIn", { path: "/" });

		throw redirect(303, "/");
	},
};
