<script lang="ts">
    export let pokemon
</script>

<div class="card card-hover w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2 ml-2">
    <div class="p-1 text-center">
        <h3 class="text-lg font-bold mb-2">{pokemon.name}</h3>
        <a href="/pokemon/{pokemon.id}" class="btn text-sm variant-ghost">View</a>
    </div>
</div>