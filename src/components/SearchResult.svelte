<!-- Search component for search page, user can search by any query and include diet filters -->
<script>
  import { onMount } from "svelte";
  import { fetchSearchResults } from "../services/fetchSearchResults.js";
  import { writable } from "svelte/store";
  import { searchQuery } from "../services/store.js";
  import RecipeCard from "./RecipeCard.svelte";

  let searchResults = writable([]);
  let query = writable("");
  let loading = false;
  let error = writable("");
  let currentPage = writable(1);
  const resultsPerPage = 9;
  let totalResults = writable(0);
  let selectedDiet = writable([]);
  let searchTimeout;

  // Add 1 second debounce to stop multiple calls to search API before typing is complete
  const debouncedFetchResults = debounce(fetchResults, 1000);

  // Timeout while user is typing to avoid multiple API calls
  function debounce(func, delay) {
    return function (...args) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Load the stored query from session storage if it exists
  onMount(async () => {
    if (
      typeof window !== "undefined" &&
      typeof sessionStorage !== "undefined"
    ) {
      console.log("Running in the browser");
      const storedQuery = sessionStorage.getItem("searchQuery");
      console.log("Stored query:", storedQuery);
      if (storedQuery) {
        query.set(storedQuery);
      }
    }
  });

  // Reactive statement to fetch results when query changes with debounce to give time for typing
  $: if ($query) {
    debouncedFetchResults(
      $query,
      // Calculate the offset based on the current page and results per page
      ($currentPage - 1) * resultsPerPage,
      $selectedDiet
    );
  }
  // Fetch search results from the API
  async function fetchResults(queryValue, offset, diet) {
    loading = true;
    error.set("");
    try {
      const response = await fetchSearchResults(queryValue, offset, diet);
      searchResults.set(response.results);
      totalResults.set(response.totalResults); // Assuming the API response has a 'totalResults' field
    } catch (err) {
      error.set("Failed to fetch search results.");
      searchResults.set([]);
    } finally {
      // Set loading to false after results are fetched
      loading = false;
    }
  }

  // Handle search form submission
  function handleSearch(event) {
    event.preventDefault();
    const queryValue = event.target.querySelector("#searchQuery").value;
    if (queryValue) {
      searchQuery.set(queryValue);
      sessionStorage.setItem("searchQuery", queryValue);
      const dietValue = $selectedDiet.join(",");
      fetchResults(queryValue, 0, dietValue);
      currentPage.set(1); // Reset to first page on new search
    }
  }

  // Scroll to top of the page for next and previous
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleNextPage() {
    currentPage.update((n) => n + 1);
    scrollToTop();
  }

  function handlePreviousPage() {
    currentPage.update((n) => (n > 1 ? n - 1 : n));
    scrollToTop();
  }

  // Function to toggle diet filters
  function toggleDiet(diet) {
    selectedDiet.update((diets) => {
      if (diets.includes(diet)) {
        return diets.filter((d) => d !== diet);
      } else {
        return [...diets, diet];
      }
    });
  }
</script>

<!-- Search results component -->
<div class="container-fluid container-background">
  <form
    class="d-flex flex-column align-items-end"
    id="searchForm"
    on:submit={handleSearch}
  >
    <div class="d-flex mb-3 w-100">
      <!-- Search bar with bind on query value -->
      <input
        class="form-control me-2"
        type="text"
        id="searchQuery"
        placeholder="Search recipes..."
        bind:value={$query}
      />
      <button class="btn btn-primary" type="submit">Search</button>
    </div>
    <!-- Filters with checked value depending if selectedDiet includes value -->
    <div id="dietFilter" class="d-flex flex-wrap justify-content-start">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="vegetarianCheckbox"
          value="vegetarian"
          on:change={() => toggleDiet("vegetarian")}
          checked={$selectedDiet.includes("vegetarian")}
        />
        <label class="form-check-label" for="vegetarianCheckbox"
          >Vegetarian</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="pescetarianCheckbox"
          value="pescetarian"
          on:change={() => toggleDiet("pescetarian")}
          checked={$selectedDiet.includes("pescetarian")}
        />
        <label class="form-check-label" for="pescetarianCheckbox"
          >Pescetarian</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="veganCheckbox"
          value="vegan"
          on:change={() => toggleDiet("vegan")}
          checked={$selectedDiet.includes("vegan")}
        />
        <label class="form-check-label" for="veganCheckbox">Vegan</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="glutenFreeCheckbox"
          value="gluten free"
          on:change={() => toggleDiet("gluten free")}
          checked={$selectedDiet.includes("gluten free")}
        />
        <label class="form-check-label" for="glutenFreeCheckbox"
          >Gluten Free</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="dairyFreeCheckbox"
          value="dairy free"
          on:change={() => toggleDiet("dairy free")}
          checked={$selectedDiet.includes("dairy free")}
        />
        <label class="form-check-label" for="dairyFreeCheckbox"
          >Dairy Free</label
        >
      </div>
    </div>
  </form>

  <!-- Spinner to show while loading -->
  {#if loading}
    <div class="text-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {/if}
  <!-- Display error if search fails -->
  <div class="container">
    {#if $error}
      <!-- Show an error message if fetching data fails -->
      <div class="alert alert-danger" role="alert">
        {$error}
      </div>
    {:else if $searchResults.length === 0 && !loading}
      <!-- Show a message when no recipes -->
      <div class="alert alert-warning text-center" role="alert">
        No recipes found. Try making a new search.
      </div>
    {:else}
      <!-- Display Recipes with recipe card component -->
      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {#each $searchResults as result}
          <RecipeCard recipe={result} />
        {/each}
      </div>
      <!-- Pagination controls -->
      <div
        class="pagination-controls d-flex justify-content-between align-items-center mt-4"
      >
        <button
          class="btn btn-primary"
          on:click={handlePreviousPage}
          disabled={$currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {$currentPage} of {Math.ceil($totalResults / resultsPerPage)}
        </span>
        <button
          class="btn btn-primary"
          on:click={handleNextPage}
          disabled={$currentPage === Math.ceil($totalResults / resultsPerPage)}
        >
          Next
        </button>
      </div>
    {/if}
  </div>
</div>
