<script>
  import { link } from "svelte-spa-router";
</script>

<nav class="pico-container pico-gap-4 pico-text-center">
  <a href="/" use:link
    ><img src="logo.png" alt="Site Logo" class="pico-mx-auto" /></a
  >
  <a href="/about" use:link class="pico-text-primary">About</a>
  <a href="/contact" use:link class="pico-text-primary">Contact</a>
</nav>
