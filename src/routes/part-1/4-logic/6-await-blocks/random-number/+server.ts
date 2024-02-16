import { json } from "@sveltejs/kit";

export function GET(): Response {
	return json({ number: Math.ceil(Math.random() * 100) });
}
