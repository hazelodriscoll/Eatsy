const FAVOURITES_KEY = "favourites";
// Get stored favourites or return an empty array if none are found
export const getFavourites = () => {
  const favourites = localStorage.getItem(FAVOURITES_KEY);
  return favourites ? JSON.parse(favourites) : [];
};
// Add a recipe to the favourites
export const addFavourite = (recipe) => {
  const favourites = getFavourites();
  if (!favourites.find((r) => r.id === recipe.id)) {
    favourites.push(recipe);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
  }
};
// Remove a recipe from the favourites
export const removeFavourite = (recipeId) => {
  let favourites = getFavourites();
  favourites = favourites.filter((r) => r.id !== recipeId);
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
};
// Check if a recipe is currently a favourite
export const isFavourite = (recipeId) => {
  const favourites = getFavourites();
  return favourites.some((r) => r.id === recipeId);
};
