<script>
  import { onMount } from "svelte";
  import { fetchSearchResults } from "../services/fetchSearchResults.js";
  import { writable } from "svelte/store";
  import { searchQuery } from "../services/store.js";
  import SearchResultsCard from "../components/SearchResultsCard.svelte";

  let searchResults = writable([]);
  let query = writable("");
  let loading = writable(false);
  let error = writable("");
  let currentPage = writable(1);
  const resultsPerPage = 9;
  let totalResults = writable(0);
  let selectedDiet = writable([]);
  let searchTimeout;

  //Add 1 second debounce to stop multiple calls to search api before typing is complete
  const debouncedFetchResults = debounce(fetchResults, 1000);

  function debounce(func, delay) {
    //Debounce input function with same arguments
    return function (...args) {
      //Clear existing timeout
      clearTimeout(searchTimeout);
      //Set new timout to input delay (Currently 1 second)
      searchTimeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  onMount(async () => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      console.log("Running in the browser");
      const storedQuery = localStorage.getItem("searchQuery");
      console.log("Stored query:", storedQuery);
      if (storedQuery) {
        query.set(storedQuery);
      }
    }
  });

  //Reactive statement to fetch results when query changes
  $: if ($query) {
    //Debounce search so API is not called on every key press
    debouncedFetchResults(
      $query,
      ($currentPage - 1) * resultsPerPage,
      $selectedDiet
    );
  }

  async function fetchResults(queryValue, offset, diet) {
    loading.set(true);
    error.set("");
    try {
      const response = await fetchSearchResults(queryValue, offset, diet);
      searchResults.set(response.results);
      totalResults.set(response.totalResults); // Assuming the API response has a 'totalResults' field
    } catch (err) {
      error.set("Failed to fetch search results.");
      searchResults.set([]);
    } finally {
      loading.set(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    const queryValue = event.target.querySelector("#searchQuery").value;
    if (queryValue) {
      searchQuery.set(queryValue);
      localStorage.setItem("searchQuery", queryValue);
      const dietValue = $selectedDiet.join(",");
      fetchResults(queryValue, 0, dietValue);
      currentPage.set(1); // Reset to first page on new search
    }
  }

  function handleNextPage() {
    currentPage.update((n) => n + 1);
  }

  function handlePreviousPage() {
    currentPage.update((n) => (n > 1 ? n - 1 : n));
  }

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

<div class="container-fluid container-background">
  <form
    class="d-flex flex-column align-items-end"
    id="searchForm"
    on:submit={handleSearch}
  >
    <div class="d-flex mb-3 w-100">
      <input
        class="form-control me-2"
        type="text"
        id="searchQuery"
        placeholder="Search recipes..."
        bind:value={$query}
      />
      <button class="btn btn-primary" type="submit">Search</button>
    </div>
    <div id="dietFilter" class="d-flex flex-wrap justify-content-start">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="vegetarianCheckbox"
          value="vegetarian"
          on:change={() => toggleDiet("vegetarian")}
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
        />
        <label class="form-check-label" for="dairyFreeCheckbox"
          >Dairy Free</label
        >
      </div>
    </div>
  </form>
  <div class="container">
    {#if $loading}
      <p>Loading...</p>
    {:else if $error}
      <p>{$error}</p>
    {:else}
      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {#each $searchResults as result}
          <SearchResultsCard recipie={result} />
        {/each}
      </div>

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
