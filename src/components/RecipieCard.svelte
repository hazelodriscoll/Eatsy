<script>
  import { setRecipie } from "../services/store.js";
  export let recipie;

  const setCurrentRecipie = (recipie) => {
    setRecipie(recipie);
    window.location.href = "/Eatsy/ingredients";
  };
  const fallbackImage = "/Eatsy/images/fallbackImage.png";

  let isFav = false;
  let showAddedPopup = false;
  let showRemovedPopup = false;
</script>

<div class="col">
  <div class="card">
    <!-- Use fallback image if API does not return an image -->
    {#if recipie.image}
      <img
        src={recipie.image}
        class="card-img-top sr-custom-rounded"
        alt={recipie.title}
      />{:else}
      <img
        src={fallbackImage}
        class="card-img-top sr-custom-rounded"
        alt={recipie.title}
      />
    {/if}

    <div class="card-body">
      <h5 class="card-title">{recipie.title}</h5>
      <div class="sr-recipe-details">
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/time-icon.png"
            alt="Time"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Total Time:</span>
          <span>{recipie.readyInMinutes} mins</span>
        </div>
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/servings-icon.png"
            alt="Servings"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Servings:</span>
          <span class="sr-detail-info">{recipie.servings}</span>
        </div>
        <div class="sr-detail-item">
          <img
            src="/Eatsy/images/recipie-by-icon.png"
            alt="Recipe by"
            class="sr-detail-icon"
          />
          <span class="sr-detail-name">Recipe by:</span>
          <a
            href={recipie.spoonacularSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="link-dark"
          >
            <!-- Need if statement as response differs between API calls -->
            {#if recipie.sourceName}
              {recipie.sourceName}
            {:else}
              {recipie.creditsText}
            {/if}
          </a>
        </div>
        <button
          class="btn btn-primary"
          on:click={() => setCurrentRecipie(recipie)}
        >
          View Full Recipie
        </button>
      </div>
    </div>
  </div>
</div>
