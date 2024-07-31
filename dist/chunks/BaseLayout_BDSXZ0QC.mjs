import { c as createComponent, r as renderTemplate, d as renderHead, e as renderSlot } from './astro/server_C5xvivdp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Eatsy</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">${renderHead()}</head> <body> <header style="background-color: #F5B6A7;"> <nav class="navbar navbar-expand-lg navbar-light bg-transparent"> <div class="container-fluid"> <a class="navbar-brand" href="#">Eatsy</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/Eatsy">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="/Eatsy/recipies">Explore Recipes</a> </li> <li class="nav-item"> <a class="nav-link" href="/Eatsy/searchResults">Search Recipes</a> </li> <li class="nav-item"> <a class="nav-link" href="#">My Favourites</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Login</a> </li> </ul> <form class="d-flex" id="searchForm"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchQuery"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div> </nav> </header> <main class="container mt-5"> <!-- Named slot for main content --> ${renderSlot($$result, $$slots["main"])} </main> <br> <footer style="background-color: #F5B6A7;" class="text-center py-4 mt-auto"> <div class="container"> <p class="mb-0">© 2024 Eatsy. All rights reserved.</p> </div> </footer>  </body> </html>`;
}, "C:/Users/Hazel/Documents/Project/Eatsy/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
