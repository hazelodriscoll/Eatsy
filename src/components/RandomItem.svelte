<!-- Component to display a random recipe that was got from API on index load, cycles thru all 50 recipes -->
<script>
  import { writable } from "svelte/store";
  import { getRecipes } from "../services/recipeService.js";
  import ModalRecipe from "./ModalRecipe.svelte";

  let recipes = writable([]);
  let currentRecipeIndex = writable(0);
  let showModal = writable(false);

  async function fetchRandomRecipes() {
    const params = {
      apiKey: "fb571eb0a36b417daee401017d390f99",
      "include-tags": "main course",
      number: "50",
    };
    const data = await getRecipes(params);
    recipes.set(data.recipes);
    currentRecipeIndex.set(0);
    showModal.set(true);
  }

  function nextRecipe() {
    currentRecipeIndex.update((n) => (n + 1) % $recipes.length);
  }

  function closeModal() {
    showModal.set(false);
  }
</script>

<!-- Button to fetch random recipes -->
<div class="center-content">
  <button class="btn btn-primary btn-lg" on:click={fetchRandomRecipes}>
    Get Random Recipe
  </button>
</div>

<!-- Modal to display the recipe -->
{#if $showModal}
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header modal-background">
          <button type="button" class="btn-close" on:click={closeModal}
          ></button>
        </div>
        <div class="modal-body modal-body">
          {#if $recipes.length > 0}
            <ModalRecipe recipe={$recipes[$currentRecipeIndex]} />
          {:else}
            <p>Loading...</p>
          {/if}
        </div>
        <div class="modal-footer modal-background">
          <button class="btn btn-primary" on:click={closeModal}> Close </button>
          <!-- Roll again option to get next recipe -->
          <button class="btn btn-primary" on:click={nextRecipe}>
            Roll Again <img
              src="/Eatsy/images/dice.png"
              alt="dice"
              class="detail-icon"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
{/if}
