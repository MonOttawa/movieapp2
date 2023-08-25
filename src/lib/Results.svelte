<script>
  import { results } from "./Search.svelte";

  $: movie = $results;
</script>

{#if movie}
  <div class="pico-container pico-gap-4">
    <h2>{movie.Title}</h2>
    <img src={movie.Poster} alt={movie.Title} />
    <p>Release Date: {movie.Released}</p>
    <p>{movie.Plot}</p>
  </div>
{:else}
  <p>No results found.</p>
{/if}
