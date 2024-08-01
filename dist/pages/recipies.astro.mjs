import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C5xvivdp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DyjymbOP.mjs';
import { g as getRecipies } from '../chunks/recipieService_CiqzkUG5.mjs';
export { renderers } from '../renderers.mjs';

const $$Recipies = createComponent(async ($$result, $$props, $$slots) => {
  const params = {
    apiKey: "fb571eb0a36b417daee401017d390f99",
    "include-tags": "main course",
    number: "27",
    includeInstructions: true
  };
  let allRecipies;
  try {
    allRecipies = await getRecipies(params);
    console.log(allRecipies);
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    allRecipies = { recipes: [] };
  }
  const recipesPerPage = 9;
  let currentPage = 1;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container mt-5"> <h3 class="display-4">Browse Recipes</h3> ${renderComponent($$result2, "RecipiePagination", null, { "client:only": "svelte", "allRecipies": allRecipies, "recipiesPerPage": recipesPerPage, "currentPage": currentPage, "client:component-hydration": "only", "client:component-path": "C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipiePagination.svelte", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/recipies.astro", void 0);

const $$file = "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/recipies.astro";
const $$url = "/Eatsy/recipies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Recipies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
