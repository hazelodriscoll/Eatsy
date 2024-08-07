import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// Set the site URL and base path
export default defineConfig({
  integrations: [svelte()],
  site: "https://hazelodriscoll.github.io/Eatsy",
  base: "/Eatsy",
});
