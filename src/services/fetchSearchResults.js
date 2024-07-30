import { searchRecipies } from "./recipieService";

export async function fetchSearchResults(query) {
  const params = {
    apiKey: "fb571eb0a36b417daee401017d390f99",
    query: query,
    addRecipeInstructions: true,
    addRecipeNutrition: true,
    number: 1,
  };

  try {
    const response = await searchRecipies(params);
    return response.results; // Assuming the API response has a 'results' field
  } catch (err) {
    console.error("Failed to fetch search results:", err);
    throw new Error("Failed to fetch search results.");
  }
}
