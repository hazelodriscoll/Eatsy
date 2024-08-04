<script>
  import { onMount } from "svelte";
  import { getFavourites } from "../services/favourite";
  import RecipieCard from "./RecipieCard.svelte"; // Import the RecipieCard component

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
    <h3 class="display-4">Favourite Recipies</h3>
    <div class="container mt-5 container-background">
      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {#each allRecipies as result}
          <RecipieCard recipie={result} />
        {/each}
      </div>
    </div>
  </div>
</main>
