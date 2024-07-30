<script>
  import { setSearchRecipie } from "../services/store.js";
  export let recipie;

  const handleSetRecipie = (recipie) => {
    setSearchRecipie(recipie);
    window.location.href = "/Eatsy/instructions";
  };
</script>

<div class="sr-card">
  <div class="sr-card-image">
    <img
      src={recipie.image}
      class="img-fluid sr-custom-rounded sr-card-img-top"
      alt={recipie.title}
    />
  </div>
  <div class="sr-card-body">
    <h5 class="sr-card-title">{recipie.title}</h5>
    <div class="sr-recipe-details">
      <div class="sr-detail-item">
        <img
          src="/Eatsy/images/time-icon.png"
          alt="Time"
          class="sr-detail-icon"
        />
        <span>{recipie.time} mins</span>
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
          class="sr-detail-info"
        >
          {recipie.sourceName}
        </a>
      </div>
      <button
        class="btn btn-primary"
        on:click={() => handleSetRecipie(recipie)}
      >
        View Full Recipie
      </button>
    </div>
  </div>
</div>
