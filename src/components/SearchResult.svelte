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
    fetchInitialResults($query);
  }

  async function fetchInitialResults(queryValue) {
    loading.set(true);
    error.set("");
    try {
      const results = await fetchSearchResults(queryValue);
      searchResults.set(results);
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
      fetchInitialResults(queryValue);
    }
  }
</script>

<form class="d-flex" id="searchForm" on:submit={handleSearch}>
  <input
    class="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    id="searchQuery"
  />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>

{#if $loading}
  <p>Loading...</p>
{/if}
{#if $error}
  <p>{$error}</p>
{/if}
{#if $searchResults.length > 0}
  <ul>
    {#each $searchResults as result}
      <SearchResultsCard recipie={result} />
    {/each}
  </ul>
{/if}
