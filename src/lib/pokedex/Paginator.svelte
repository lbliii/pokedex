<!-- Paginator.svelte -->
<script lang="ts">

  export let nextPaginator: string
  export let prevPaginator: string

</script>

<div class="flex justify-between items-center mt-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={prevPaginator}>Previous</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={nextPaginator}>Next</button>
</div>
