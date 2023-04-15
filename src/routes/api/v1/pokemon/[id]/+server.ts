import PokeAPi from '$lib/server/pokeapi';

export const GET = async (event) => {
	const { api, Noun } = PokeAPi();

	const pokemon = await api.get(Noun.POKEMON, { id_or_name: event.params.id });

	return new Response(JSON.stringify(pokemon));
};
GET.satisfies = 'RequestHandler';


