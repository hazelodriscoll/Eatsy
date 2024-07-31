<script>
  import RecipieCard from "./RecipieCard.svelte";
  export let allRecipies;
  export let recipiesPerPage;
  export let currentPage;

  const getPaginatedRecipies = (page) => {
    const start = (page - 1) * recipiesPerPage;
    const end = start + recipiesPerPage;
    return allRecipies.recipes.slice(start, end);
  };

  let recipies = getPaginatedRecipies(currentPage);

  const updateRecipies = (page) => {
    recipies = getPaginatedRecipies(page);
    currentPage = page;
  };

  const prevPage = () => {
    if (currentPage > 1) {
      updateRecipies(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(allRecipies.recipes.length / recipiesPerPage)) {
      updateRecipies(currentPage + 1);
    }
  };
</script>

<div class="container mt-5">
  <div class="row">
    {#each recipies as recipie, index}
      {#if recipie && recipie.title}
        <div class="col-md-4">
          <RecipieCard {recipie} />
        </div>
      {:else}
        <div>Error: Invalid recipie data</div>
      {/if}
    {/each}
  </div>
  <div class="pagination-controls">
    <button
      class="btn btn-primary"
      on:click={prevPage}
      disabled={currentPage === 1}>Previous</button
    >
    <span class="page-number">Page {currentPage}</span>
    <button
      class="btn btn-primary"
      on:click={nextPage}
      disabled={currentPage ===
        Math.ceil(allRecipies.recipes.length / recipiesPerPage)}>Next</button
    >
  </div>
</div>
