<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const recipie = writable(null);

  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedRecipie = localStorage.getItem("currentRecipie");
      if (storedRecipie) {
        recipie.set(JSON.parse(storedRecipie));
      }
    }
  });
</script>

{#if $recipie}
  <div>
    <h3 class="display-4">{$recipie.title}</h3>
    <div class="ingredientsContainer">
      <div class="ingredientsList">
        <h3>Ingredients</h3>
        <ul>
          {#each $recipie.extendedIngredients as ingredient}
            <li>{ingredient.original}</li>
          {/each}
        </ul>
      </div>
      <div class="incredientsImage">
        <img
          src={$recipie.image}
          alt={$recipie.title}
          class="ingredientsImage custom-rounded"
        />
      </div>
    </div>
    <div class="ingredientsContainer">
      <div class="instructions-page-instructions-section">
        <h2>Instructions</h2>
        {#each $recipie.analyzedInstructions as instructionGroup}
          {#each instructionGroup.steps as instruction}
            <ul>
              <b>{instruction.number}:</b>
              <!-- Regex needed for formatting the steps as no space is returned
                    after full stop -->
              {instruction.step.replace(/\.(?=\S)/g, ". ")}
            </ul>
          {/each}
        {/each}
      </div>
    </div>
  </div>
{:else}
  <p>Recipe not found.</p>
{/if}
