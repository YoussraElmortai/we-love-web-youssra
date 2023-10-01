import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const page = await client.getByUID('index', 'index');
	console.log(page.data);
	return page.data;
}
