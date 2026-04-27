<script lang="ts">
  let title = "Hei fra Bun og Svelte!";
  let counter = $state(0);
</script>

<main>
  <h1>{title}</h1>
  <p>Du har trykket på knappen {counter} ganger.</p>
  <button onclick={() => counter++}> Klikk meg </button>
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
    padding: 2rem;
  }
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
