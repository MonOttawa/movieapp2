<script>
  import { fetchMovie } from "./fetchMovie.js";
  import { writable } from "svelte/store";

  export const results = writable(null);
  let movieTitle = "2e797993";

  async function searchMovie() {
    const apiKey = ""; // Replace with your OMDb API key
    const data = await fetchMovie(movieTitle, apiKey);
    results.set(data);
  }
</script>

<div class="pico-container pico-gap-4">
  <input
    type="text"
    bind:value={movieTitle}
    placeholder="Search movie title"
    class="pico-input"
  />
  <button on:click={searchMovie} class="pico-btn pico-btn-primary"
    >Search</button
  >
</div>
