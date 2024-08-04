import { w as writable, c as create_ssr_component, b as add_attribute, e as escape } from './index_CvEBcJFH.mjs';

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

/* C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipieCard.svelte generated by Svelte v4.2.18 */

const fallbackImage = "/Eatsy/images/fallbackImage.png";

const RecipieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { recipie } = $$props;

	if ($$props.recipie === void 0 && $$bindings.recipie && recipie !== void 0) $$bindings.recipie(recipie);

	return `<div class="col"><div class="card"> ${recipie.image
	? `<img${add_attribute("src", recipie.image, 0)} class="card-img-top sr-custom-rounded"${add_attribute("alt", recipie.title, 0)}>`
	: `<img${add_attribute("src", fallbackImage, 0)} class="card-img-top sr-custom-rounded"${add_attribute("alt", recipie.title, 0)}>`} <div class="card-body"><h5 class="card-title">${escape(recipie.title)}</h5> <div class="sr-recipe-details"><div class="sr-detail-item"><img src="/Eatsy/images/time-icon.png" alt="Time" class="sr-detail-icon"> <span class="sr-detail-name" data-svelte-h="svelte-6ivwmf">Total Time:</span> <span>${escape(recipie.readyInMinutes)} mins</span></div> <div class="sr-detail-item"><img src="/Eatsy/images/servings-icon.png" alt="Servings" class="sr-detail-icon"> <span class="sr-detail-name" data-svelte-h="svelte-1bdf15t">Servings:</span> <span class="sr-detail-info">${escape(recipie.servings)}</span></div> <div class="sr-detail-item"><img src="/Eatsy/images/recipie-by-icon.png" alt="Recipe by" class="sr-detail-icon"> <span class="sr-detail-name" data-svelte-h="svelte-1m28vzp">Recipe by:</span> <a${add_attribute("href", recipie.spoonacularSourceUrl, 0)} target="_blank" rel="noopener noreferrer" class="link-dark"> ${recipie.sourceName
	? `${escape(recipie.sourceName)}`
	: `${escape(recipie.creditsText)}`}</a></div> <div class="button-container"><button class="btn btn-primary" data-svelte-h="svelte-1xhe0tz">View Full Recipie</button> <button class="image-button">${`<img src="/Eatsy/images/favouriteButton.png" alt="favourite" class="detail-icon">`}</button> ${``} ${``}</div></div></div></div></div>`;
});

export { RecipieCard as R };
