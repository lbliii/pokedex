<script>
	
    import PokemonCard from '$lib/pokedex/PokemonCard.svelte'
    export let data
    console.log(data)
    let pokemon = data.props.pokemon


</script>

 <PokemonCard pokemon="{pokemon}"/> 