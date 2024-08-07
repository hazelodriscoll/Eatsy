const FAVOURITES_KEY = "favourites";
// Get stored favourites or return an empty array if none are found
export const getFavourites = () => {
  const favourites = localStorage.getItem(FAVOURITES_KEY);
  return favourites ? JSON.parse(favourites) : [];
};
// Add a recipe to the favourites
export const addFavourite = (recipie) => {
  const favourites = getFavourites();
  if (!favourites.find((r) => r.id === recipie.id)) {
    favourites.push(recipie);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
  }
};
// Remove a recipe from the favourites
export const removeFavourite = (recipieId) => {
  let favourites = getFavourites();
  favourites = favourites.filter((r) => r.id !== recipieId);
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
};
// Check if a recipe is currently a favourite
export const isFavourite = (recipieId) => {
  const favourites = getFavourites();
  return favourites.some((r) => r.id === recipieId);
};
