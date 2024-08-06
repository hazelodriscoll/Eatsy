<script>
  import RecipieCard from "./RecipieCard.svelte";
  import { onMount } from "svelte";
  import { getRecipies } from "../services/recipieService.js";
  import {
    getSelectedOptions,
    addSelectedOption,
    removeSelectedOption,
  } from "../services/selectedOption.js";
  export let recipiesPerPage;
  export let currentPage;
  let allRecipies = { recipes: [] };
  let recipies = [];
  // Get saved option from local storage
  let selectedOptions = getSelectedOptions();
  console.log(selectedOptions);

  // Function to update the URL with the selected option
  const updateURL = (options) => {
    if (options) {
      const url = new URL(window.location);
      url.searchParams.set("selectedOptions", options.join(","));
      window.history.pushState({}, "", url);
    }
  };

  // Read the selected option from the URL when the component loads
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const optionsFromURL = urlParams.get("selectedOptions");
    if (optionsFromURL) {
      selectedOptions = optionsFromURL.split(",");
    }
    fetchRecipies();
  });

  const getPaginatedRecipies = (page) => {
    if (!allRecipies || !allRecipies.recipes) {
      return [];
    }
    const start = (page - 1) * recipiesPerPage;
    const end = start + recipiesPerPage;
    return allRecipies.recipes.slice(start, end);
  };

  //Added refresh so user has option to refresh recipies shown
  const fetchRecipies = async (refresh = false) => {
    try {
      //Use a storage key so that we don't need to make API call everytime for same option
      //But if new option is selected, we still fetch new data
      const storageKey = `allRecipies_${selectedOptions.join("_")}`;
      const storedRecipies = sessionStorage.getItem(storageKey);

      if (storedRecipies && !refresh) {
        allRecipies = JSON.parse(storedRecipies);
        console.log("Loaded recipes from local storage: ", allRecipies);
      } else {
        // Check if selectedOptions is 'all' and set it to an empty string if true
        // This is to ensure if all is selected, no restrictions are placed on API call
        const includeTags = selectedOptions;
        const params = {
          apiKey: "fb571eb0a36b417daee401017d390f99",
          "include-tags": includeTags,
          number: "27",
          includeInstructions: true,
        };
        allRecipies = await getRecipies(params);
        console.log("Fetched new recipes: ", allRecipies);
        sessionStorage.setItem(storageKey, JSON.stringify(allRecipies));
      }
      recipies = getPaginatedRecipies(currentPage); // Update recipies after fetching
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
      allRecipies = { recipes: [] }; // Ensure allRecipies is always defined
    }
  };

  const updateRecipies = (page) => {
    recipies = getPaginatedRecipies(page);
    currentPage = page;
  };

  const prevPage = () => {
    if (currentPage > 1) {
      updateRecipies(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(allRecipies.recipes.length / recipiesPerPage)) {
      updateRecipies(currentPage + 1);
    }
  };

  // Call updateURL whenever selectedOptions changes
  $: updateURL(selectedOptions);

  $: fetchRecipies(true);

  // Function to capitalize the first letter of selectedOptions
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    if (event.target.checked) {
      addSelectedOption(option);
    } else {
      removeSelectedOption(option);
    }
    selectedOptions = getSelectedOptions();
    fetchRecipies(true);
  };

  const availableOptions = [
    "vegetarian",
    "vegan",
    "pescatarian",
    "gluten free",
    "dairy free",
    "breakfast",
    "lunch",
    "dinner",
    "dessert",
    "drinks",
  ];
</script>

<div class="container-fluid container-background">
  <div class="title-button-container">
    <h4
      class="bg-secondary text-white px-2 py-1 rounded"
      style="display: inline-block;"
    >
      {selectedOptions.map(capitalizeFirstLetter).join(", ")}
    </h4>
    <div class="button-container d-flex">
      <button
        class="btn btn-secondary me-2"
        on:click={() => fetchRecipies(true)}>Refresh Recipies</button
      >
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Add Options
        </button>
        <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
          {#each availableOptions as option}
            <li class="mb-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={option}
                  id={option}
                  on:change={handleCheckboxChange}
                  checked={selectedOptions.includes(option)}
                />
                <label class="form-check-label" for={option}>
                  {capitalizeFirstLetter(option)}
                </label>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="card-group row row-cols-1 row-cols-md-3 g-4">
    {#each recipies as recipie}
      {#if recipie && recipie.title}
        <div class="col-md-4">
          <RecipieCard {recipie} />
        </div>
      {:else}
        <div>Error: Invalid recipie data</div>
      {/if}
    {/each}
  </div>
  <div
    class="pagination-controls d-flex justify-content-between align-items-center mt-4"
  >
    <button
      class="btn btn-primary"
      on:click={prevPage}
      disabled={currentPage === 1}>Previous</button
    >
    <span class="page-number">Page {currentPage}</span>
    <button
      class="btn btn-primary"
      on:click={nextPage}
      disabled={currentPage ===
        Math.ceil(allRecipies.recipes.length / recipiesPerPage)}>Next</button
    >
  </div>
</div>
