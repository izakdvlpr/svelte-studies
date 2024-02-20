import { redirect } from "@sveltejs/kit";

export const actions = {
	default: ({ cookies, url }) => {
		cookies.set("loggedIn", "true", { path: "/" });

		throw redirect(303, url.searchParams.get("redirectTo") ?? "/");
	},
};
