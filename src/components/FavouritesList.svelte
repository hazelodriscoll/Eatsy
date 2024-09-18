<!-- Component to display all favourites that are stored in local storage -->
<script>
  import { onMount } from "svelte";
  import { getFavourites } from "../services/favourite";
  import RecipeCard from "./RecipeCard.svelte";

  let allRecipes = [];

  onMount(() => {
    const favourites = getFavourites();
    if (favourites) {
      allRecipes = favourites;
    }
    console.log("all recipes" + JSON.stringify(allRecipes));
  });
</script>

<main>
  <div class="container">
    <div class="title-button-container">
      <h1 class="display-4">Favourite Recipes</h1>
      <img
        src="/Eatsy/images/favouritesHeaderImage.png"
        alt="peanut butter and jelly"
      />
    </div>
    <div class="container container-background">
      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {#each allRecipes as result}
          <RecipeCard recipe={result} />
        {/each}
      </div>
    </div>
  </div>
</main>
