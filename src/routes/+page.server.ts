export async function load(event, offset = 0) {
	const response = await event.fetch(`/api/v1/pokemon?offset=${offset}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return {
		props: { 
            pokemon: await response.json()
        }
	};
}