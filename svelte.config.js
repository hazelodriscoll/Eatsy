import adapter from "@sveltejs/adapter-node";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default {
  kit: {
    adapter: adapter(),
    target: "#svelte",
    vite: {
      plugins: [svelte({ ssr: true })],
      ssr: {
        noExternal: ["svelte"],
      },
    },
  },
};
