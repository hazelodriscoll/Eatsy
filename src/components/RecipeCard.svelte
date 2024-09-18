<!-- Component to dynamically display a recipe -->
<script>
  import { setRecipe } from "../services/store.js";
  import { onMount } from "svelte";
  import {
    addFavourite,
    removeFavourite,
    isFavourite,
  } from "../services/favourite.js";
  export let recipe;

  // Set current recipe in local storage and navigate to display recipe
  const setCurrentRecipe = (recipe) => {
    setRecipe(recipe);
    window.location.href = "/Eatsy/displayRecipe";
  };

  // Fall back image if API does not return an image
  const fallbackImage = "/Eatsy/images/fallbackImage.png";

  // Favourites functionality
  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;

  const toggleFavourite = (recipe) => {
    isFav = isFavourite(recipe.id);
    if (isFav) {
      removeFavourite(recipe.id);
      showRemovedPopup = true;
      setTimeout(() => (showRemovedPopup = false), 2000); // Hide popup after 2 seconds
    } else {
      addFavourite(recipe);
      showAddedPopup = true;
      setTimeout(() => (showAddedPopup = false), 2000); // Hide popup after 2 seconds
    }
    isFav = !isFav;
  };

  function handleImageError(event) {
    event.target.src = fallbackImage;
  }

  // On mount, check if recipe is favourite and set isFav accordingly
  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      isFav = isFavourite(recipe.id);
    }
  });
</script>

<!-- Recipe Card -->
<div class="col">
  <div class="card">
    <!-- Use fallback image if API does not return an image -->
    {#if recipe.image}
      <img
        src={recipe.image}
        class="card-img-top sr-custom-rounded"
        alt={recipe.title}
        on:error={handleImageError}
      />{:else}
      <img
        src={fallbackImage}
        class="card-img-top sr-custom-rounded"
        alt={recipe.title}
      />
    {/if}

    <div class="card-body">
      <h5 class="card-title">{recipe.title}</h5>
      <div class="sr-recipe-details">
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/time-icon.png"
            alt="Time"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Total Time:</span>
          <span>{recipe.readyInMinutes} mins</span>
        </div>
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/servings-icon.png"
            alt="Servings"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Servings:</span>
          <span class="sr-detail-info">{recipe.servings}</span>
        </div>
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/recipe-by-icon.png"
            alt="Recipe by"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Recipe by:</span>
          <a
            href={recipe.spoonacularSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="link-dark"
          >
            <!-- Need if statement as response differs between API calls (Random vs Search) -->
            {#if recipe.sourceName}
              {recipe.sourceName}
            {:else}
              {recipe.creditsText}
            {/if}
          </a>
        </div>
        <div class="button-container">
          <button
            class="btn btn-primary"
            on:click={() => setCurrentRecipe(recipe)}
          >
            View Full Recipe
          </button>
          <button class="image-button" on:click={toggleFavourite(recipe)}>
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
            <div class="popup popup-card">
              Added to favourites <img
                src="/Eatsy/images/happyIcon.png"
                alt="smiley face"
                class="detail-icon"
              />
            </div>
          {/if}
          {#if showRemovedPopup}
            <div class="popup popup-card">
              Removed from favourites <img
                src="/Eatsy/images/sadIcon.png"
                alt="sad face"
                class="detail-icon"
              />
            </div>
          {/if}
        </div>
        <div class="sr-detail-item badge-container">
          {#each recipe.diets as diet}
            <span class="badge rounded-pill text-bg-secondary">{diet}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
