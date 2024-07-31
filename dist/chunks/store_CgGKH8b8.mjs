import { w as writable } from './index_CvEBcJFH.mjs';

// src/store.js

const isBrowser =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

const storedRecipie = isBrowser ? localStorage.getItem("currentRecipie") : null;
const currentRecipie = writable(
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

const storedSearchRecipie = isBrowser
  ? localStorage.getItem("searchRecipie")
  : null;

const searchRecipie = writable(
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
