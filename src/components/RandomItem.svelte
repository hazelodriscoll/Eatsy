<script>
  import { writable } from "svelte/store";
  import { getRecipies } from "../services/recipieService.js";
  import RecipieCard from "./RecipieCard.svelte";

  let recipies = writable([]);
  let currentRecipieIndex = writable(0);
  let showModal = writable(false);

  async function fetchRandomRecipies() {
    const params = {
      apiKey: "fb571eb0a36b417daee401017d390f99",
      "include-tags": "main course",
      number: "50",
    };
    const data = await getRecipies(params);
    recipies.set(data.recipes);
    currentRecipieIndex.set(0);
    showModal.set(true);
  }

  function nextRecipie() {
    currentRecipieIndex.update((n) => (n + 1) % $recipies.length);
  }

  function closeModal() {
    showModal.set(false);
  }
</script>

<!-- Button to fetch random recipes -->
<div class="center-content">
  <button class="btn btn-primary btn-lg" on:click={fetchRandomRecipies}>
    Take Me to Random Recipie
  </button>
</div>

<!-- Modal to display the recipe -->
{#if $showModal}
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Random Recipe</h5>
          <button type="button" class="btn-close" on:click={closeModal}
          ></button>
        </div>
        <div class="modal-body">
          {#if $recipies.length > 0}
            <RecipieCard recipie={$recipies[$currentRecipieIndex]} />
          {:else}
            <p>Loading...</p>
          {/if}
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" on:click={nextRecipie}>
            Not Happy
          </button>
          <button class="btn btn-primary" on:click={closeModal}> Close </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
  }
</style>
