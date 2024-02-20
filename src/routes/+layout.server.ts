export function load({ cookies }) {
	const loggedIn = cookies.get("loggedIn");

	return {
		loggedIn: !!loggedIn,
	};
}
