<script setup lang="ts">
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { property: "og:title", content: `KreativeLabsKE: The Invoice Generator.` },
    {
      name: "description",
      content: "KreativeLabsKE: The Invoice Generator.",
    },
    {
      property: "og:description",
      content: "Invloo: The Invoice Generator.",
    },
    { property: "og:url", content: "https://invloo.vercel.app/" },
    {
      name: "twitter:title",
      content: "KreativeLabsKE: The Invoice Generator.",
    },
    {
      name: "twitter:description",
      content: "KreativeLabsKE: The Invoice Generator.",
    },
    { name: "twitter:site", content: "https://invloo.vercel.app/" },
    {
      property: "og:image",
      content: "/icons/favicon-32x32.png",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
  ],
  title: `KreativeLabsKE`,
});

defineOgImage({
  title: `KreativeLabsKE`,
});
</script>

<template>
  <main class="max-w-[90rem] mx-auto overflow-x-hidden">
    <slot />
    <Footer />
  </main>
</template>
