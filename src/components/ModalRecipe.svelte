<!-- Bootstrap modal contents, that includes same functionality as RecipeCard but designed for modal -->
<script>
  import { setRecipe } from "../services/store.js";
  import { onMount } from "svelte";
  import {
    addFavourite,
    removeFavourite,
    isFavourite,
  } from "../services/favourite.js";
  export let recipe;

  // Fall back image if API does not return an image
  const fallbackImage = "/Eatsy/images/fallbackImage.png";

  // Needed for favourites functionality
  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;

  // Function to set the current recipe in local storage and navigate to display recipe
  const setCurrentRecipe = (recipe) => {
    setRecipe(recipe);
    window.location.href = "/Eatsy/displayRecipe";
  };

  // Function to handle image errors and set fallback image
  function handleImageError(event) {
    event.target.src = fallbackImage;
  }

  // Favourites functionality
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

  // On mount, check if recipe is favourite and set isFav accordingly
  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      isFav = isFavourite(recipe.id);
    }
  });

  $: if (recipe) {
    isFav = isFavourite(recipe.id);
  }
</script>

<!-- Modal Content: Displays the current recipe -->
<div class="container">
  <!-- Use fallback image if API does not return an image -->
  {#if recipe.image}
    <img
      src={recipe.image}
      class="img-fluid custom-rounded img-top"
      alt={recipe.title}
      on:error={handleImageError}
    />{:else}
    <img
      src={fallbackImage}
      class="img-fluid custom-rounded img-top"
      alt={recipe.title}
    />
  {/if}

  <h5 class="modal-header">{recipe.title}</h5>
  <div class="recipe-details">
    <div class="detail-item">
      <img src="/Eatsy/images/time-icon.png" alt="Time" class="detail-icon" />
      <span class="detail-name">Total Time:</span>
      <span class="detail-info">{recipe.readyInMinutes} minutes</span>
    </div>
    <div class="detail-item">
      <img
        src="/Eatsy/images/servings-icon.png"
        alt="Servings"
        class="detail-icon"
      />
      <span class="detail-name">Servings:</span>
      <span class="detail-info">{recipe.servings}</span>
    </div>
    <div class="detail-item">
      <img
        src="/Eatsy/images/recipe-by-icon.png"
        alt="Recipe by"
        class="detail-icon"
      />
      <span class="detail-name">Recipe by:</span>
      <a
        href={recipe.spoonacularSourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="link-dark"
      >
        <span class="detail-link">{recipe.creditsText}</span>
      </a>
    </div>
    <br />
    <div class="center-content modal-button-container">
      <button class="btn btn-primary" on:click={() => setCurrentRecipe(recipe)}>
        View Full Recipe
      </button>
      <button class="image-button" on:click={() => toggleFavourite(recipe)}>
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
        <div class="popup popup-modal">
          Added to favourites <img
            src="/Eatsy/images/happyIcon.png"
            alt="smiley face"
            class="detail-icon"
          />
        </div>
      {/if}
      {#if showRemovedPopup}
        <div class="popup popup-modal">
          Removed from favourites <img
            src="/Eatsy/images/sadIcon.png"
            alt="sad face"
            class="detail-icon"
          />
        </div>
      {/if}
    </div>
    <div class="sr-detail-item modal-badge-container">
      {#each recipe.diets as diet}
        <span class="badge rounded-pill text-bg-secondary">{diet}</span>
      {/each}
    </div>
  </div>
</div>
