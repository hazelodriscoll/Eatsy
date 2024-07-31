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
  const resultsPerPage = 10;
  let totalResults = writable(0);
  let selectedDiet = writable("");
  let searchTimeout;

  //Add debounce to stop multiple calls to api before typing complete
  const debouncedSearch = debounce(handleSearch, 300);

  function debounce(func, delay) {
    return function (...args) {
      clearTimeout(searchTimeout);
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

  $: if ($query) {
    fetchResults($query, ($currentPage - 1) * resultsPerPage, $selectedDiet);
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
    const dietValue = event.target.querySelector("#dietFilter").value; // Get the selected diet value
    if (queryValue) {
      searchQuery.set(queryValue);
      localStorage.setItem("searchQuery", queryValue);
      selectedDiet.set(dietValue); // Set the selected diet
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
</script>

<div>
  <form class="d-flex" id="searchForm" on:submit={debouncedSearch}>
    <input
      class="form-control me-2"
      type="text"
      id="searchQuery"
      placeholder="Search recipes..."
      bind:value={$query}
    />
    <select id="dietFilter" bind:value={$selectedDiet}>
      <option value="">All Diets</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="pescetarian">Pescetarian</option>
      <option value="vegan">Vegan</option>
      <option value="gluten free">Gluten Free</option>
      <option value="dairy free">Dairy Free</option>
    </select>
    <button type="submit">Search</button>
  </form>

  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p>{$error}</p>
  {:else}
    <ul>
      {#each $searchResults as result}
        <SearchResultsCard recipie={result} />
      {/each}
    </ul>
    <div class="pagination-controls">
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
