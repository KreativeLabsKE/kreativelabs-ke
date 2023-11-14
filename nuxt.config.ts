// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-og-image",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
  ],
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "~/components/ui",
        // this is required else Nuxt will autoImport `.ts` file
        extensions: [".vue"],
        // prefix for your components, eg: UiButton
        prefix: "Ui",
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      });
    },
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Agbalumo: {
        wght: [400],
      },
    },
  },
});
