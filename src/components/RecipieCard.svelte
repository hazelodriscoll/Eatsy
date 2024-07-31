<script>
  import { setRecipie } from "../services/store.js";
  export let recipie;
  const setCurrentRecipie = (recipie) => {
    setRecipie(recipie);
    window.location.href = "/Eatsy/ingredients";
  };
</script>

<div class="card fixed-size-card">
  <img
    src={recipie.image}
    class="img-fluid custom-rounded card-img-top card-image"
    alt={recipie.title}
  />
  <div class="card-body">
    <h5 class="card-title detail-name">{recipie.title}</h5>
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
      <div class="center-content">
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
