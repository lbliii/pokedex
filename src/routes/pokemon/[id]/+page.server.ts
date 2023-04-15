import PokeAPi from '$lib/server/pokeapi';

export async function load(event) {
	const response = await event.fetch(`/api/v1/pokemon/${event.params.id}`, {
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