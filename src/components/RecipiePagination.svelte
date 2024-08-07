<!-- Display all recipies for browse using Random API call, this does not have offset in response so needs own pagination -->
<script>
  import RecipieCard from "./RecipieCard.svelte";
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

  // Get saved option from session storage
  let selectedOptions = getSelectedOptions();
  let isLoading = false;

  // Flag to stop multiple fetches at once due to reactive statement
  let fetchInProgress = false;

  // Function to update the URL with the selected option
  const updateURL = (options) => {
    if (options) {
      const url = new URL(window.location);
      url.searchParams.set("selectedOptions", options.join(","));
      window.history.pushState({}, "", url);
    }
  };

  // Function to get a paginated list of recipes (call w random to API does not include offset)
  const getPaginatedRecipies = (page) => {
    if (!allRecipies || !allRecipies.recipes) {
      return [];
    }
    const start = (page - 1) * recipiesPerPage;
    const end = start + recipiesPerPage;
    // Return a slice of the recipies array based on the current page
    return allRecipies.recipes.slice(start, end);
  };

  // Fetch recipes from API or session storage
  const fetchRecipies = async (refresh = false) => {
    // Prevent multiple calls by returning if fetch is already in progress (Bug fix)
    if (fetchInProgress) return; // Prevent multiple calls
    fetchInProgress = true;
    // Show loading spinner while fetching recipes
    isLoading = true;
    try {
      // Create a string storage key based on the selected options
      // This key will be used to store the recipies in session storage if they are not already stored
      // Needed to avoid making the same calls to API multiple times
      const sortedOptions = selectedOptions.slice().sort().join("_");
      const storageKey = `allRecipies_${sortedOptions}`;
      console.log("Storage Key:", storageKey);

      // Check if recipies are stored in session storage
      const storedRecipies = sessionStorage.getItem(storageKey);
      // If recipies are stored in session storage, get them from there
      if (storedRecipies && !refresh) {
        allRecipies = JSON.parse(storedRecipies);
        console.log("Loaded recipes from session storage: ", allRecipies);
        // Else fetch new recipies from the API
      } else {
        const params = {
          apiKey: "fb571eb0a36b417daee401017d390f99",
          // If no options , set to null
          "include-tags": selectedOptions.length > 0 ? selectedOptions : null,
          number: "27",
          includeInstructions: true,
        };

        // Remove include-tags if null or empty as they are not needed
        if (
          params["include-tags"] === null ||
          params["include-tags"].length === 0
        ) {
          delete params["include-tags"];
        }

        // Fetch new recipies from the API with correct parameters
        allRecipies = await getRecipies(params);
        console.log("Fetched new recipes: ", allRecipies);

        // Store the fetched recipies in session storage using key
        sessionStorage.setItem(storageKey, JSON.stringify(allRecipies));
      }

      // Slice the recipies based on the current page
      recipies = getPaginatedRecipies(currentPage);

      //Error handling to log errors
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
      allRecipies = { recipes: [] };
    } finally {
      // Hide loading spinner after successfully retrieving recipies
      isLoading = false;
      fetchInProgress = false;
    }
  };

  // Update recipes only when selectedOptions change and are not in session storage
  // Using svelte reactive statement
  // When selectedOptions change, fetch new recipies if not already stored in session storage
  $: {
    // Create a string storage key based on the selected options
    const sortedOptions = selectedOptions.slice().sort().join("_");
    const storageKey = `allRecipies_${sortedOptions}`;
    const storedRecipies = sessionStorage.getItem(storageKey);

    // Handle different scenarios based on whether recipes are found in session storage
    if (selectedOptions.length > 0) {
      if (storedRecipies) {
        // If recipes are stored in session storage, use them
        allRecipies = JSON.parse(storedRecipies);
      } else {
        // If no recipes in session storage, fetch from API
        fetchRecipies(true);
      }
    } else {
      // Handle the case with no current selected options
      fetchRecipies(true);
    }

    // Update the recipes list based on current page
    recipies = getPaginatedRecipies(currentPage);
  }

  // Back to top when clicking next or previous page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to update the recipies based on the current page
  const updateRecipies = (page) => {
    recipies = getPaginatedRecipies(page);
    currentPage = page;
    scrollToTop();
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      updateRecipies(currentPage - 1);
    }
  };
  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(allRecipies.recipes.length / recipiesPerPage)) {
      updateRecipies(currentPage + 1);
    }
  };

  // Call updateURL whenever selectedOptions changes so it reflects user choices
  $: updateURL(selectedOptions);

  // Function to capitalize the first letter of selectedOptions for display
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Function to handle checkbox changes using selectedOption javascript service
  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    if (event.target.checked) {
      addSelectedOption(option);
    } else {
      removeSelectedOption(option);
    }
    selectedOptions = getSelectedOptions();
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

<!--HTML code for the RecipiePagination component-->
<div class="container-fluid container-background">
  <div class="title-button-container">
    <h4
      class="bg-secondary text-white px-2 py-1 rounded"
      style="display: inline-block;"
    >
      {selectedOptions.map(capitalizeFirstLetter).join(", ")}
    </h4>
    <!--Option to refresh recipies using boolean, to get new set of results if user unhappy-->
    <div class="button-container d-flex">
      <button
        class="btn btn-secondary me-2"
        on:click={() => fetchRecipies(true)}>Refresh Recipies</button
      >
      <!-- Bootstrap dropdown menu with checkbox to change selected options -->
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
  <!-- Bootstrap spinner to show while loading -->
  {#if isLoading}
    <div class="text-center my-4">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {/if}
  <!-- Display recipes -->
  <div class="card-group row row-cols-1 row-cols-md-3 g-4">
    {#each recipies as recipie}
      {#if recipie && recipie.title}
        <div class="col-md-4">
          <RecipieCard {recipie} />
        </div>
      {:else}
        <div>Error: Invalid recipe data</div>
      {/if}
    {/each}
  </div>
  <!-- Cycle through pages of saved results -->
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
