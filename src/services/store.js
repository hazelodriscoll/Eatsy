// Svelte store for storing the current reciie and search query
import { writable } from "svelte/store";

// Check if the code is running in the browser
const isBrowser =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

// Get the current recipe from localStorage
const storedRecipe = isBrowser ? localStorage.getItem("currentRecipe") : null;

// Create a writable store for the current recipe
export const currentRecipe = writable(
  storedRecipe ? JSON.parse(storedRecipe) : null
);

// If the code is running in the browser, subscribe to the currentRecipe store
if (isBrowser) {
  currentRecipe.subscribe((value) => {
    if (value) {
      // If a recipe is set, store it in localStorage
      localStorage.setItem("currentRecipe", JSON.stringify(value));
    } else {
      // If no recipe is set, remove it from localStorage
      localStorage.removeItem("currentRecipe");
    }
  });
}
// Set the current recipe in the store
export function setRecipe(data) {
  currentRecipe.set(data);
}

// Get the current recipe from the store
export const getRecipe = () => {
  if (!isBrowser) return null;
  const recipe = localStorage.getItem("currentRecipe");
  return recipe ? JSON.parse(recipe) : null;
};

// Svelte store for storing the search query
export const searchQuery = writable("");
