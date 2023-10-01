import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	// Zorg ervoor dat je het juiste type gebruikt, bijvoorbeeld 'homepage'
	const page = await client.getByUID('homepage', 'homepage');

	return page.data;
}
