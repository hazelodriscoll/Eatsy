// src/store.js
import { writable } from "svelte/store";

const isBrowser =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

const storedRecipie = isBrowser ? localStorage.getItem("currentRecipie") : null;
export const currentRecipie = writable(
  storedRecipie ? JSON.parse(storedRecipie) : null
);

if (isBrowser) {
  currentRecipie.subscribe((value) => {
    if (value) {
      localStorage.setItem("currentRecipie", JSON.stringify(value));
    } else {
      localStorage.removeItem("currentRecipie");
    }
  });
}

export function setRecipie(data) {
  currentRecipie.set(data);
}

export const getRecipie = () => {
  if (!isBrowser) return null;
  const recipie = localStorage.getItem("currentRecipie");
  return recipie ? JSON.parse(recipie) : null;
};

export const searchQuery = writable("");
