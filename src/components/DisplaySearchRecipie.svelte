<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const sRecipie = writable(null);

  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedSearchRecipie = localStorage.getItem("searchRecipie");
      if (storedSearchRecipie) {
        console.log(JSON.parse(storedSearchRecipie));
        sRecipie.set(JSON.parse(storedSearchRecipie));
      }
    }
  });

  function formatAmount(amount) {
    const numAmount = parseFloat(amount);
    return Number.isInteger(numAmount)
      ? numAmount.toString()
      : numAmount.toFixed(1);
  }
</script>

<main>
  {#if $sRecipie}
    <div class="instructions-page-container">
      <h3 class="instructions-page-title">Recipie: {$sRecipie.title}</h3>

      <div class="instructions-page-content">
        <div class="instructions-page-details-section">
          <div class="instructions-page-image-section">
            <img
              src={$sRecipie.image}
              alt={$sRecipie.title}
              class="instructions-page-image"
            />
          </div>
          <div class="instructions-page-ingredients-section">
            <h2>Ingredients</h2>
            <ul class="instructions-page-ingredients-list">
              {#each $sRecipie.nutrition.ingredients as ingredient}
                <li>
                  <!-- Formatting of number needed as recipie returns in big decimals
                  and per single serving -->
                  {formatAmount(ingredient.amount * $sRecipie.servings)}
                  {ingredient.unit} of {ingredient.name}
                </li>
              {/each}
            </ul>
          </div>
          <div class="instructions-page-instructions-section">
            <h2>Instructions</h2>
            <ul class="instructions-page-instructions-list">
              {#each $sRecipie.analyzedInstructions as instructionGroup}
                {#each instructionGroup.steps as instruction}
                  <li>
                    <b>{instruction.number}:</b>
                    <!-- Regex needed for formatting the steps as no space is returned
                    after full stop -->
                    {instruction.step.replace(/\.(?=\S)/g, ". ")}
                  </li>
                {/each}
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <p>Recipe not found.</p>
  {/if}
</main>

<style>
  .instructions-page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Helvetica, Arial, sans-serif;
  }
  .instructions-page-title {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  .instructions-page-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .instructions-page-image-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .instructions-page-image {
    max-width: 100%;
    border-radius: 8px;
  }
  .instructions-page-details-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .instructions-page-ingredients-section,
  .instructions-page-instructions-section {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  .instructions-page-ingredients-section h2,
  .instructions-page-instructions-section h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  .instructions-page-ingredients-list,
  .instructions-page-instructions-list {
    list-style: none;
    padding: 0;
  }
  .instructions-page-ingredients-list li,
  .instructions-page-instructions-list li {
    margin-bottom: 10px;
  }
</style>
