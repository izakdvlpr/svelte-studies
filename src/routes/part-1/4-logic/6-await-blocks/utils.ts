export interface GetRandomNumberResponse {
	number: number;
}

export async function getRandomNumber(): Promise<GetRandomNumberResponse> {
	const response = await fetch("/part-1/4-logic/6-await-blocks/random-number");

	if (!response.ok) {
		throw new Error("Request failed");
	}

	const body = await response.json();

	return body as GetRandomNumberResponse;
}
