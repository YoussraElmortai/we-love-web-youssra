import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

import { GraphQLClient } from 'graphql-request';

console.log(HYGRAPH_URL);

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: {
		Authorization: `Bearer ${HYGRAPH_KEY}`
	}
});
