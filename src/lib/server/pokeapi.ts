enum Noun {
	ABILITY = 'ability',
	BERRY = 'berry',
	BERRY_FIRMNESS = 'berry-firmness',
	BERRY_FLAVOR = 'berry-flavor',
	CHARACTERISTIC = 'characteristic',
	CONTEST_EFFECT = 'contest-effect',
	CONTEST_TYPE = 'contest-type',
	EGG_GROUP = 'egg-group',
	ENCOUNTER_CONDITION = 'encounter-condition',
	ENCOUNTER_CONDITION_VALUE = 'encounter-condition-value',
	ENCOUNTER_METHOD = 'encounter-method',
	EVOLUTION_CHAIN = 'evolution-chain',
	EVOLUTION_TRIGGER = 'evolution-trigger',
	GENDER = 'gender',
	GENERATION = 'generation',
	GROWTH_RATE = 'growth-rate',
	ITEM = 'item',
	ITEM_ATTRIBUTE = 'item-attribute',
	ITEM_CATEGORY = 'item-category',
	ITEM_FLING_EFFECT = 'item-fling-effect',
	ITEM_POCKET = 'item-pocket',
	LANGUAGE = 'language',
	LOCATION = 'location',
	LOCATION_AREA = 'location-area',
	MACHINE = 'machine',
	MOVE = 'move',
	MOVE_AILMENT = 'move-ailment',
	MOVE_BATTLE_STYLE = 'move-battle-style',
	MOVE_CATEGORY = 'move-category',
	MOVE_DAMAGE_CLASS = 'move-damage-class',
	MOVE_LEARN_METHOD = 'move-learn-method',
	MOVE_TARGET = 'move-target',
	NATURE = 'nature',
	PAL_PARK_AREA = 'pal-park-area',
	POKEATHLON_STAT = 'pokeathlon-stat',
	POKEDEX = 'pokedex',
	POKEMON = 'pokemon',
	POKEMON_COLOR = 'pokemon-color',
	POKEMON_FORM = 'pokemon-form',
	POKEMON_HABITAT = 'pokemon-habitat',
	POKEMON_SHAPE = 'pokemon-shape',
	POKEMON_SPECIES = 'pokemon-species',
	REGION = 'region',
	STAT = 'stat',
	SUPER_CONTEST_EFFECT = 'super-contest-effect',
	TYPE = 'type',
	VERSION = 'version',
	VERSION_GROUP = 'version-group'
}

interface Sprites {
	front_default?: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: string;
	back_default?: string;
	back_female?: string;
	back_shiny?: string;
	back_shiny_female?: string;
	versions?: {
		[key: string]: {
			[key: string]: string;
		};
	};
}

class PokeAPI {
	private readonly base_url = 'https://pokeapi.co/api/v2/';

	public get(
		object: Noun,
		options?: { id_or_name?: string; offset?: number; limit?: number }
	): Promise<unknown> {
		let { id_or_name, offset, limit } = options || {};

		let url = id_or_name ? `${this.base_url}${object}/${id_or_name}` : `${this.base_url}${object}`;

		if (offset !== undefined) {
			url += `?offset=${offset}`;
		}

		if (limit !== undefined) {
			url += `${offset !== undefined ? '&' : '?'}limit=${limit}`;
		}

		console.log(url);
		return fetch(url).then((response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				return null;
			}
		});
	}
}

// Wrap types and class in function for easy access
function initPokeAPI() {
	const api = new PokeAPI();
	return {
		api,
		Noun,
	};
}

// Export the wrapped objects for use in other modules
export default initPokeAPI;
