import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C5xvivdp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_05zvBB23.mjs';
export { renderers } from '../renderers.mjs';

const $$Favourites = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result2, "FavouritesList", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "C:/Users/Hazel/Documents/Project/Eatsy/src/components/FavouritesList.svelte", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/favourites.astro", void 0);

const $$file = "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/favourites.astro";
const $$url = "/Eatsy/favourites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Favourites,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
