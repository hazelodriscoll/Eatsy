// public search.js for search bar functionality on navbar
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      const formData = new FormData(event.target);
      const query = formData.get("query");
      localStorage.setItem("searchQuery", query.toString()); // Store the query in localStorage

      // Fetch search results
      try {
        document.querySelector("#results").innerHTML = "<p>Loading...</p>";
        const { fetchSearchResults } = await import(
          "../../src/services/fetchSearchResults.js"
        );
        const results = await fetchSearchResults(query);
        document.querySelector("#results").innerHTML =
          results.length > 0
            ? `<ul>${results
                .map((result) => `<li key=${result.id}>${result.title}</li>`)
                .join("")}</ul>`
            : "<p>No results found.</p>";
      } catch (error) {
        document.querySelector("#results").innerHTML =
          "<p>Failed to fetch search results.</p>";
      }
    });
  }
});
