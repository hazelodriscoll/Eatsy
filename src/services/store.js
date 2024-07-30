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

const storedSearchRecipie = isBrowser
  ? localStorage.getItem("searchRecipie")
  : null;

export const searchRecipie = writable(
  storedSearchRecipie ? JSON.parse(storedSearchRecipie) : null
);

if (isBrowser) {
  searchRecipie.subscribe((value) => {
    if (value) {
      localStorage.setItem("searchRecipie", JSON.stringify(value));
    } else {
      localStorage.removeItem("searchRecipie");
    }
  });
}

export function setSearchRecipie(data) {
  searchRecipie.set(data);
}

export const getSearchRecipie = () => {
  if (!isBrowser) return null;
  const sRecipie = localStorage.getItem("searchRecipie");
  return sRecipie ? JSON.parse(sRecipie) : null;
};

export const searchQuery = writable("");
