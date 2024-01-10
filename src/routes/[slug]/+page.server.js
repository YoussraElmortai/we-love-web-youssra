import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load(slug) {
	let query = gql`
		query MyQuery {
			workshops(where: { workshopSlug: "slug" }) {
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

	const result = await hygraph.request(query, { slug });
	// console.log('Opgehaalde data:', result); // Console.log om de opgehaalde data te zien
	return result;
}
