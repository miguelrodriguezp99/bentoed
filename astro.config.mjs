import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bentoed.vercel.app",
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind(), sitemap()],
});
