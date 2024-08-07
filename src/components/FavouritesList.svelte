<!-- Component to display all favourites that are stored in local storage -->
<script>
  import { onMount } from "svelte";
  import { getFavourites } from "../services/favourite";
  import RecipieCard from "./RecipieCard.svelte";

  let allRecipies = [];

  onMount(() => {
    const favourites = getFavourites();
    if (favourites) {
      allRecipies = favourites;
    }
    console.log("all recipies" + JSON.stringify(allRecipies));
  });
</script>

<main>
  <div class="container">
    <div class="title-button-container">
      <h1 class="display-4">Favourite Recipies</h1>
      <img
        src="/Eatsy/images/favouritesHeaderImage.png"
        alt="peanut butter and jelly"
      />
    </div>
    <div class="container container-background">
      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {#each allRecipies as result}
          <RecipieCard recipie={result} />
        {/each}
      </div>
    </div>
  </div>
</main>
