import { env } from "$env/dynamic/private";
import { PASSPHRASE } from "$env/static/private";

export function load() {
	console.log(PASSPHRASE);
	console.log(env.PASSPHRASE);
}
