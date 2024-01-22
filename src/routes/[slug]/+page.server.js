import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
	// Extract the slug from the params
	const { slug } = params;

	// Define your GraphQL query with a filter for the specific slug
	const query = gql`
		query GetWorkshopBySlug($slug: String!) {
			workshops(where: { workshopSlug: $slug }) {
				workshopSlug
				workshopTitle
				workshopDescription {
					html
				}
				workshopImg {
					url
				}
			}
		}
	`;
	const variables = { slug };

	try {
		// Execute the GraphQL query with the variable
		const data = await hygraph.request(query, variables);

		console.log('GraphQL data:', data); // Log the data received from GraphQL

		// Check if any workshops are found
		if (data.workshops.length > 0) {
			const foundWorkshop = data.workshops.find((workshop) => workshop.workshopSlug === slug);

			// Check if a workshop with the matching slug is found
			if (foundWorkshop) {
				// console.log('Workshop found:', foundWorkshop); // Log the workshop found

				return {
					workshop: foundWorkshop
				};
			} else {
				console.log('Workshop not found for the provided slug'); // Log that no workshop was found
				return {
					status: 404,
					error: 'Workshop not found'
				};
			}
		} else {
			console.log('No workshops found'); // Log that no workshops were found
			return {
				status: 404,
				error: 'No workshops found'
			};
		}
	} catch (error) {
		// Handle any GraphQL request errors here
		console.error('GraphQL request error:', error);
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}

// Dank je wel, meneer Knetters en Sanne!
