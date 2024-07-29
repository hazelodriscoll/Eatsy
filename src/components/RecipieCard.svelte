<script>
  export let recipie;
</script>

<div class="col-md-4">
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
          <img
            src="/Eatsy/images/time-icon.png"
            alt="Time"
            class="detail-icon"
          />
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
          <span class="detail-info">{recipie.creditsText}</span>
        </div>
      </div>
      <div class="center-content">
        <a href={recipie.spoonacularSourceUrl} class="btn btn-primary">
          View Full Recipie
        </a>
      </div>
    </div>
  </div>
</div>