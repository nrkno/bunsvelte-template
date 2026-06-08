<script lang="ts">
  const pageTitle = "Bun + Svelte 5 Template";
  let clickCount = $state(0);
</script>

<main>
  <h1>{pageTitle}</h1>
  <p>Du har trykket på knappen {clickCount} ganger.</p>
  <button onclick={() => clickCount++}> Klikk meg </button>
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
