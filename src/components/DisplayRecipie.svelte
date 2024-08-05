<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    addFavourite,
    removeFavourite,
    isFavourite,
  } from "../services/favourite.js";

  const recipie = writable(null);
  const fallbackImage = "/Eatsy/images/fallbackImage.png";

  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;

  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedRecipie = localStorage.getItem("currentRecipie");
      if (storedRecipie) {
        const parsedRecipie = JSON.parse(storedRecipie);
        recipie.set(parsedRecipie);
        isFav = isFavourite(parsedRecipie.id);
      }
    }
  });

  const toggleFavourite = () => {
    recipie.update((current) => {
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

  function formatAmount(amount) {
    const numAmount = parseFloat(amount);
    return Number.isInteger(numAmount)
      ? numAmount.toString()
      : numAmount.toFixed(1);
  }

  function handleImageError(event) {
    event.target.src = fallbackImage;
  }
</script>

<main>
  {#if $recipie}
    <div class="container">
      <div class="row">
        <div class="col-12 title-button-container">
          <h3 class="display-4">{$recipie.title} Recipie</h3>
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
              <div class="popup">
                Added to favourites <img
                  src="/Eatsy/images/happyIcon.png"
                  alt="smiley face"
                  class="detail-icon"
                />
              </div>
            {/if}
            {#if showRemovedPopup}
              <div class="popup">
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
      <div class="row">
        <div class="ingredientsList col-md-4">
          <h3>Ingredients</h3>
          <!-- If recipie from search API, print this way -->
          {#if $recipie.nutrition}
            {#each $recipie.nutrition.ingredients as ingredient}
              <li>
                <!-- Formatting of number needed as recipie returns in big decimals
                      and per single serving -->
                {formatAmount(ingredient.amount * $recipie.servings)}
                {ingredient.unit} of {ingredient.name}
              </li>
            {/each}
          {/if}
          <!-- If recipie from random API, print this way -->
          {#if $recipie.extendedIngredients}
            {#each $recipie.extendedIngredients as ingredient}
              <li>{ingredient.original}</li>
            {/each}
          {/if}
        </div>
        <div class="ingredientsImage col-md-8">
          {#if $recipie.image}
            <img
              src={$recipie.image}
              class="ingredientsImage custom-rounded"
              alt={$recipie.title}
              on:error={handleImageError}
            />{:else}
            <img
              src={fallbackImage}
              class="ingredientsImage custom-rounded"
              alt={$recipie.title}
            />
          {/if}
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Instructions</h3>
          {#each $recipie.analyzedInstructions as instructionGroup}
            {#each instructionGroup.steps as instruction}
              <b>{instruction.number}: </b>
              <!-- Regex needed for formatting the steps as no space is returned
                    after full stop -->
              {instruction.step.replace(/\.(?=\S)/g, ". ")}
              <br />
            {/each}
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <p>Recipe not found.</p>
  {/if}
</main>
