<script>
  import { setRecipie } from "../services/store.js";
  import { onMount } from "svelte";
  import {
    addFavourite,
    removeFavourite,
    isFavourite,
  } from "../services/favourite.js";
  export let recipie;

  const fallbackImage = "/Eatsy/images/fallbackImage.png";
  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;

  const setCurrentRecipie = (recipie) => {
    setRecipie(recipie);
    window.location.href = "/Eatsy/ingredients";
  };

  function handleImageError(event) {
    event.target.src = fallbackImage;
  }

  const toggleFavourite = (recipie) => {
    isFav = isFavourite(recipie.id);
    if (isFav) {
      removeFavourite(recipie.id);
      showRemovedPopup = true;
      setTimeout(() => (showRemovedPopup = false), 2000); // Hide popup after 2 seconds
    } else {
      addFavourite(recipie);
      showAddedPopup = true;
      setTimeout(() => (showAddedPopup = false), 2000); // Hide popup after 2 seconds
    }
    isFav = !isFav;
  };

  // On mount, check if recipie is favourite and set isFav accordingly
  onMount(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      isFav = isFavourite(recipie.id);
    }
  });
</script>

<div class="container">
  <!-- Use fallback image if API does not return an image -->
  {#if recipie.image}
    <img
      src={recipie.image}
      class="img-fluid custom-rounded img-top"
      alt={recipie.title}
      on:error={handleImageError}
    />{:else}
    <img
      src={fallbackImage}
      class="img-fluid custom-rounded img-top"
      alt={recipie.title}
    />
  {/if}

  <h5 class="modal-header">{recipie.title}</h5>
  <div class="recipe-details">
    <div class="detail-item">
      <img src="/Eatsy/images/time-icon.png" alt="Time" class="detail-icon" />
      <span class="detail-name">Total Time:</span>
      <span class="detail-info">{recipie.readyInMinutes} minutes</span>
    </div>
    <div class="detail-item">
      <img
        src="/Eatsy/images/servings-icon.png"
        alt="Servings"
        class="detail-icon"
      />
      <span class="detail-name">Servings:</span>
      <span class="detail-info">{recipie.servings}</span>
    </div>
    <div class="detail-item">
      <img
        src="/Eatsy/images/recipie-by-icon.png"
        alt="Recipe by"
        class="detail-icon"
      />
      <span class="detail-name">Recipe by:</span>
      <a
        href={recipie.spoonacularSourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="link-dark"
      >
        <span class="detail-link">{recipie.creditsText}</span>
      </a>
    </div>
    <br />
    <div class="center-content modal-button-container">
      <button
        class="btn btn-primary"
        on:click={() => setCurrentRecipie(recipie)}
      >
        View Full Recipie
      </button>
      <button class="image-button" on:click={toggleFavourite(recipie)}>
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
    <div class="sr-detail-item modal-badge-container">
      {#each recipie.diets as diet}
        <span class="badge rounded-pill text-bg-secondary">{diet}</span>
      {/each}
    </div>
  </div>
</div>
