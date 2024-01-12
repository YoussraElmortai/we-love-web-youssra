import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load(data) {
	let query = gql`
		query MyQuery {
			workshops(where: { workshopSlug: "cssgrids" }) {
				id
				workshopTitle
				workshopImg {
					url
				}
				workshopDescription {
					html
				}
			}
		}
	`;

	const result = await hygraph.request(query, { data });
	// console.log('Opgehaalde data:', result); // Console.log om de opgehaalde data te zien
	console.log(data.params.slug);
	return result;
}
