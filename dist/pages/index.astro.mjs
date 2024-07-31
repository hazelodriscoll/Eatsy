import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5xvivdp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BDSXZ0QC.mjs';
import { c as create_ssr_component, b as add_attribute, e as escape, s as subscribe, v as validate_component, w as writable } from '../chunks/index_CvEBcJFH.mjs';
import '../chunks/store_CgGKH8b8.mjs';
/* empty css                                 */
import { g as getRecipies } from '../chunks/recipieService_B1H61WaX.mjs';
export { renderers } from '../renderers.mjs';

/* C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipieCard.svelte generated by Svelte v4.2.18 */

const RecipieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { recipie } = $$props;

	if ($$props.recipie === void 0 && $$bindings.recipie && recipie !== void 0) $$bindings.recipie(recipie);
	return `<div class="card fixed-size-card"><img${add_attribute("src", recipie.image, 0)} class="img-fluid custom-rounded card-img-top card-image"${add_attribute("alt", recipie.title, 0)}> <div class="card-body"><h5 class="card-title detail-name">${escape(recipie.title)}</h5> <div class="recipe-details"><div class="detail-item"><img src="/Eatsy/images/time-icon.png" alt="Time" class="detail-icon"> <span class="detail-name" data-svelte-h="svelte-1a4wdw7">Total Time:</span> <span class="detail-info">${escape(recipie.readyInMinutes)} minutes</span></div> <div class="detail-item"><img src="/Eatsy/images/servings-icon.png" alt="Servings" class="detail-icon"> <span class="detail-name" data-svelte-h="svelte-1i2bjh">Servings:</span> <span class="detail-info">${escape(recipie.servings)}</span></div> <div class="detail-item"><img src="/Eatsy/images/recipie-by-icon.png" alt="Recipe by" class="detail-icon"> <span class="detail-name" data-svelte-h="svelte-ksz6m9">Recipe by:</span> <a${add_attribute("href", recipie.spoonacularSourceUrl, 0)} target="_blank" rel="noopener noreferrer" class="link-dark"><span class="detail-link">${escape(recipie.creditsText)}</span></a></div> <div class="center-content"><button class="btn btn-primary" data-svelte-h="svelte-1b8g4dz">View Full Recipie</button></div></div></div></div>`;
});

/* C:/Users/Hazel/Documents/Project/Eatsy/src/components/RandomItem.svelte generated by Svelte v4.2.18 */

const css = {
	code: ".modal-backdrop.svelte-ck9dnq{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:1040}",
	map: "{\"version\":3,\"file\":\"RandomItem.svelte\",\"sources\":[\"RandomItem.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { writable } from \\\"svelte/store\\\";\\r\\n  import { getRecipies } from \\\"../services/recipieService.js\\\";\\r\\n  import RecipieCard from \\\"./RecipieCard.svelte\\\";\\r\\n\\r\\n  let recipies = writable([]);\\r\\n  let currentRecipieIndex = writable(0);\\r\\n  let showModal = writable(false);\\r\\n\\r\\n  async function fetchRandomRecipies() {\\r\\n    const params = {\\r\\n      apiKey: \\\"fb571eb0a36b417daee401017d390f99\\\",\\r\\n      \\\"include-tags\\\": \\\"main course\\\",\\r\\n      number: \\\"50\\\",\\r\\n    };\\r\\n    const data = await getRecipies(params);\\r\\n    recipies.set(data.recipes);\\r\\n    currentRecipieIndex.set(0);\\r\\n    showModal.set(true);\\r\\n  }\\r\\n\\r\\n  function nextRecipie() {\\r\\n    currentRecipieIndex.update((n) => (n + 1) % $recipies.length);\\r\\n  }\\r\\n\\r\\n  function closeModal() {\\r\\n    showModal.set(false);\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<!-- Button to fetch random recipes -->\\r\\n<div class=\\\"center-content\\\">\\r\\n  <button class=\\\"btn btn-primary btn-lg\\\" on:click={fetchRandomRecipies}>\\r\\n    Take Me to Random Recipie\\r\\n  </button>\\r\\n</div>\\r\\n\\r\\n<!-- Modal to display the recipe -->\\r\\n{#if $showModal}\\r\\n  <div class=\\\"modal fade show\\\" tabindex=\\\"-1\\\" style=\\\"display: block;\\\">\\r\\n    <div class=\\\"modal-dialog\\\">\\r\\n      <div class=\\\"modal-content\\\">\\r\\n        <div class=\\\"modal-header\\\">\\r\\n          <h5 class=\\\"modal-title\\\">Random Recipe</h5>\\r\\n          <button type=\\\"button\\\" class=\\\"btn-close\\\" on:click={closeModal}\\r\\n          ></button>\\r\\n        </div>\\r\\n        <div class=\\\"modal-body\\\">\\r\\n          {#if $recipies.length > 0}\\r\\n            <RecipieCard recipie={$recipies[$currentRecipieIndex]} />\\r\\n          {:else}\\r\\n            <p>Loading...</p>\\r\\n          {/if}\\r\\n        </div>\\r\\n        <div class=\\\"modal-footer\\\">\\r\\n          <button class=\\\"btn btn-secondary\\\" on:click={nextRecipie}>\\r\\n            Not Happy\\r\\n          </button>\\r\\n          <button class=\\\"btn btn-primary\\\" on:click={closeModal}> Close </button>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n  <div class=\\\"modal-backdrop fade show\\\"></div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .modal-backdrop {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.5);\\r\\n    z-index: 1040;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAmEE,6BAAgB,CACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,IACX\"}"
};

const RandomItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $recipies, $$unsubscribe_recipies;
	let $showModal, $$unsubscribe_showModal;
	let $currentRecipieIndex, $$unsubscribe_currentRecipieIndex;
	let recipies = writable([]);
	$$unsubscribe_recipies = subscribe(recipies, value => $recipies = value);
	let currentRecipieIndex = writable(0);
	$$unsubscribe_currentRecipieIndex = subscribe(currentRecipieIndex, value => $currentRecipieIndex = value);
	let showModal = writable(false);
	$$unsubscribe_showModal = subscribe(showModal, value => $showModal = value);

	$$result.css.add(css);
	$$unsubscribe_recipies();
	$$unsubscribe_showModal();
	$$unsubscribe_currentRecipieIndex();

	return ` <div class="center-content"><button class="btn btn-primary btn-lg" data-svelte-h="svelte-1ogxypb">Take Me to Random Recipie</button></div>  ${$showModal
	? `<div class="modal fade show" tabindex="-1" style="display: block;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" data-svelte-h="svelte-18nd5qm">Random Recipe</h5> <button type="button" class="btn-close"></button></div> <div class="modal-body">${$recipies.length > 0
		? `${validate_component(RecipieCard, "RecipieCard").$$render($$result, { recipie: $recipies[$currentRecipieIndex] }, {}, {})}`
		: `<p data-svelte-h="svelte-qdsr2u">Loading...</p>`}</div> <div class="modal-footer"><button class="btn btn-secondary" data-svelte-h="svelte-1dzd4qt">Not Happy</button> <button class="btn btn-primary" data-svelte-h="svelte-5mfe9d">Close</button></div></div></div></div> <div class="modal-backdrop fade show svelte-ck9dnq"></div>`
	: ``}`;
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const imageUrl = "/Eatsy/images/eatsyLogo.svg";
  const params = {
    apiKey: "fb571eb0a36b417daee401017d390f99",
    "include-tags": "main course",
    number: "3"
  };
  const recipies = await getRecipies(params);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container mt-5"> <div class="row align-items-center"> <div class="col-md-6"> <img${addAttribute(imageUrl, "src")} class="img-fluid custom-rounded" alt="Descriptive Alt Text"> </div> <div class="col-md-6"> <div class="jumbotron p-5 custom-rounded"> <h1 class="display-4">Welcome to Eatsy</h1> <p class="lead text-center">Food for Thought</p> <hr class="my-4"> <p class="detail-info">
Need dinner inspiration? Let us do the thinking! <br> Click below for
            a random tasty suggestion or explore recipies for endless inspiration.
</p> ${renderComponent($$result2, "RandomItem", RandomItem, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Hazel/Documents/Project/Eatsy/src/components/RandomItem.svelte", "client:component-export": "default" })} </div> </div> </div> </div><div class="container mt-5"> <h3 class="display-4">Popular Recipes</h3> <div class="row"> ${recipies.recipes.slice(0, 3).map((recipie) => renderTemplate`<div class="col-md-4"> ${renderComponent($$result2, "RecipeCard", RecipieCard, { "recipie": recipie, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipieCard.svelte", "client:component-export": "default" })} </div>`)} </div> </div>` })}`;
}, "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/index.astro", void 0);

const $$file = "C:/Users/Hazel/Documents/Project/Eatsy/src/pages/index.astro";
const $$url = "/Eatsy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
