<!-- Component to display the current recipe that is stored in local storage -->

<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    addFavourite,
    removeFavourite,
    isFavourite,
  } from "../services/favourite.js";

  const recipe = writable(null);
  const fallbackImage = "/Eatsy/images/fallbackImage.png";

  // Set initial values for favourites variables
  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;

  // Get the stored recipe from local storage (if it exists)
  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedRecipe = localStorage.getItem("currentRecipe");
      if (storedRecipe) {
        const parsedRecipe = JSON.parse(storedRecipe);
        recipe.set(parsedRecipe);
        isFav = isFavourite(parsedRecipe.id);
      }
    }
  });

  // Favourite button handler
  const toggleFavourite = () => {
    recipe.update((current) => {
      if (isFav) {
        removeFavourite(current.id);
        showRemovedPopup = true;
        setTimeout(() => (showRemovedPopup = false), 2000); // Hide popup after 2 seconds
      } else {
        addFavourite(current);
        showAddedPopup = true;
        setTimeout(() => (showAddedPopup = false), 2000); // Hide popup after 2 seconds
      }
      isFav = !isFav;
      return current;
    });
  };

  // Format ingredient number
  function formatAmount(amount) {
    const numAmount = parseFloat(amount);
    return Number.isInteger(numAmount)
      ? numAmount.toString()
      : numAmount.toFixed(1);
  }

  // Add fallback image as some recipes have no image in the API response
  function handleImageError(event) {
    event.target.src = fallbackImage;
  }
</script>

<main>
  <!-- Display the recipe if it exists -->
  {#if $recipe}
    <div class="container container-background">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1 class="display-4">{$recipe.title}</h1>
          <div>
            <button class="image-button" on:click={toggleFavourite}>
              {#if isFav}
                <img
                  src="/Eatsy/images/favouritedButton.png"
                  alt="favourited"
                  class="detail-icon"
                />
              {:else}
                <img
                  src="/Eatsy/images/favouriteButton.png"
                  alt="favourite"
                  class="detail-icon"
                />
              {/if}
            </button>
            {#if showAddedPopup}
              <div class="popup popup-display">
                Added to favourites <img
                  src="/Eatsy/images/happyIcon.png"
                  alt="smiley face"
                  class="detail-icon"
                />
              </div>
            {/if}
            {#if showRemovedPopup}
              <div class="popup popup-display">
                Removed from favourites <img
                  src="/Eatsy/images/sadIcon.png"
                  alt="sad face"
                  class="detail-icon"
                />
              </div>
            {/if}
          </div>
        </div>
      </div>
      <!-- Recipe Ingredients, Image and Instructions -->
      <div class="row mb-4">
        <div class="col-md-4">
          <div class="bg-light p-3 rounded">
            <h3
              class="bg-secondary text-white px-2 py-1 rounded"
              style="display: inline-block;"
            >
              Ingredients
            </h3>
            <!-- Bootstrap Styled List -->
            <ul class="list-group list-unstyled">
              {#if $recipe.nutrition}
                {#each $recipe.nutrition.ingredients as ingredient}
                  <li class="list-group-item">
                    <!-- API response gives amount per serving so need to multiply to get actual value -->
                    {formatAmount(ingredient.amount * $recipe.servings)}
                    {ingredient.unit}
                    {ingredient.name}
                  </li>
                {/each}
              {/if}
              {#if $recipe.extendedIngredients}
                {#each $recipe.extendedIngredients as ingredient}
                  <li class="list-group-item">{ingredient.original}</li>
                {/each}
              {/if}
            </ul>
          </div>
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          {#if $recipe.image}
            <img
              src={$recipe.image}
              class="img-fluid ingredientsImage custom-rounded"
              alt={$recipe.title}
              on:error={handleImageError}
            />
            <!-- Fallback image if API response has no image -->
          {:else}
            <img
              src={fallbackImage}
              class="img-fluid ingredientsImage custom-rounded"
              alt={$recipe.title}
            />
          {/if}
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="bg-light p-3 rounded container-background">
            <h3
              class="bg-secondary text-white px-2 py-1 rounded"
              style="display: inline-block;"
            >
              Instructions
            </h3>
            <!-- Bootstrap List Group for Styling -->
            <div class="list-group">
              {#each $recipe.analyzedInstructions as instructionGroup}
                {#each instructionGroup.steps as instruction}
                  <div class="list-group-item instruction-step">
                    <h5 class="step-number">Step {instruction.number}</h5>
                    <p class="step-text">
                      {instruction.step}
                    </p>
                  </div>
                {/each}
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="container">
      <p>Recipe not found.</p>
    </div>
  {/if}
</main>
