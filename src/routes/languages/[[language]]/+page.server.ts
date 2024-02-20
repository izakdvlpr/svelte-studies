const languages: Record<string, string> = {
	he: "!שלום",
	es: "Hola!",
	pt: "Olá!",
	en: "Hello!",
};

export function load({ params }) {
	return {
		language: languages[params.language ?? "he"],
	};
}
