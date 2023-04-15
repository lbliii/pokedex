<script lang="ts">
    export let data 
    let pokemon = data.props.pokemon?.results
    let offset = 0
    let cache = new Map()

    async function fetchData(offset: number) {
        if (cache.has(offset)) {
            pokemon = cache.get(offset)
        } else {
            const response = await fetch(`/api/v1/pokemon?offset=${offset}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            pokemon = data?.results
            cache.set(offset, pokemon)
        }
    }

    async function handleNext() {
        offset = offset + 20
        await fetchData(offset)
    }

    async function handlePrev() {
        offset = offset - 20
        await fetchData(offset)
    }
</script>

<h1>Pokedex</h1>

<div class="container flex flex-wrap px-4 mx-auto justify-center">
    {#each pokemon as {name}, i }
        <div class="card card-hover w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2 ml-2">
            <div class="p-1 text-center">
                <h3 class="text-lg font-bold mb-2">{name}</h3>
                <a href="/pokemon/{i+1}" class="btn text-sm variant-ghost">View</a>
            </div>
            
        </div>
    {/each}
</div>

<div class="flex justify-between items-center mt-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={handlePrev}>Previous</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={handleNext}>Next</button>
</div>
