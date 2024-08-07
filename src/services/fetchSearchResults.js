import { searchRecipies } from "./recipieService";
// Fetches search results from the API with offset for pagination
export async function fetchSearchResults(query, offset = 0, diet = null) {
  const params = {
    apiKey: "fb571eb0a36b417daee401017d390f99",
    query: query,
    addRecipeInstructions: true,
    addRecipeNutrition: true,
    number: "9",
    offset: offset,
  };
  // If a diet is specified, add it to the search parameters
  if (diet) {
    params.diet = diet;
  }

  try {
    const response = await searchRecipies(params);
    return response;
  } catch (err) {
    console.error("Failed to fetch search results:", err);
    throw new Error("Failed to fetch search results.");
  }
}
