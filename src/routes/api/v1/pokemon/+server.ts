import PokeAPi from '$lib/server/pokeapi';

export const GET = async ({url}) => {
	const { api, Noun } = PokeAPi()

	const pokemon = await api.get(Noun.POKEMON, { offset: url.searchParams.get('offset') });

	return new Response(JSON.stringify(pokemon));
};
GET.satisfies = 'RequestHandler';


