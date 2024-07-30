function constructQueryString(params) {
  return new URLSearchParams(params).toString();
}

// Get Random Recipies
export async function getRecipies(params) {
  const baseURL = "https://api.spoonacular.com/recipes/random";
  const queryString = constructQueryString(params); // Convert params object to query string
  const fullURL = `${baseURL}?${queryString}`;
  console.log("fullURL:" + fullURL);
  try {
    const response = await fetch(fullURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
}

// Get Recipes by Search Query and Include Instructions
export async function searchRecipies(params) {
  const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
  const queryString = constructQueryString(params); // Convert params object to query string
  const fullURL = `${baseURL}?${queryString}`;
  console.log("Full URL:", fullURL);

  try {
    const response = await fetch(fullURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
}
