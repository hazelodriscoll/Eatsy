// Svelte store for storing the current recipie and search query
import { writable } from "svelte/store";

// Check if the code is running in the browser
const isBrowser =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

// Get the current recipie from localStorage
const storedRecipie = isBrowser ? localStorage.getItem("currentRecipie") : null;

// Create a writable store for the current recipie
export const currentRecipie = writable(
  storedRecipie ? JSON.parse(storedRecipie) : null
);

// If the code is running in the browser, subscribe to the currentRecipie store
if (isBrowser) {
  currentRecipie.subscribe((value) => {
    if (value) {
      // If a recipie is set, store it in localStorage
      localStorage.setItem("currentRecipie", JSON.stringify(value));
    } else {
      // If no recipie is set, remove it from localStorage
      localStorage.removeItem("currentRecipie");
    }
  });
}
// Set the current recipie in the store
export function setRecipie(data) {
  currentRecipie.set(data);
}

// Get the current recipie from the store
export const getRecipie = () => {
  if (!isBrowser) return null;
  const recipie = localStorage.getItem("currentRecipie");
  return recipie ? JSON.parse(recipie) : null;
};

// Svelte store for storing the search query
export const searchQuery = writable("");
