import { searchRecipies } from "./recipieService";

export async function fetchSearchResults(query, offset = 0, diet = null) {
  const params = {
    apiKey: "fb571eb0a36b417daee401017d390f99",
    query: query,
    addRecipeInstructions: true,
    addRecipeNutrition: true,
    number: 10,
    offset: offset,
  };

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
