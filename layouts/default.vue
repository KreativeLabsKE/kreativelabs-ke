<script setup lang="ts">
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      property: "og:title",
      content: `KreativeLabsKE: Let's Build Together 🤝.`,
    },
    {
      name: "description",
      content: "KreativeLabsKE: Let's Build Together 🤝.",
    },
    {
      property: "og:description",
      content: "KreativeLabsKE: Let's Build Together 🤝.",
    },
    { property: "og:url", content: "https://kreativelabs-ke.vercel.app/" },
    {
      name: "twitter:title",
      content: "KreativeLabsKE: Let's Build Together 🤝.",
    },
    {
      name: "twitter:description",
      content: "KreativeLabsKE: Let's Build Together 🤝.",
    },
    { name: "twitter:site", content: "https://kreativelabs-ke.vercel.app/" },
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
