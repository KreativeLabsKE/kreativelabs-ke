<script setup>
const currentAnimation = ref("/lotties/web.json");
const animeType = useState("animeType", () => "web");

const animationDB = useState("animationDB", () => {
  return {
    web: "/lotties/web.json",
    mobile: "/lotties/mobile.json",
    figma: "/lotties/figma.json",
  };
});

const setCurrentAnimation = (animationType) => {
  currentAnimation.value = animationDB.value[animationType];
  animeType.value = animationType;
};
</script>

<template>
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="relative p-6 md:p-16">
      <!-- Grid -->
      <div
        class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
      >
        <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2
            class="text-3xl font-agbalumo text-gray-800 font-bold sm:text-3xl dark:text-gray-200"
          >
            Find out how we can help you succeed with our full range of services
            here.
          </h2>

          <!-- Tab Navs -->
          <nav
            class="grid gap-4 mt-5 md:mt-10"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
              @click="setCurrentAnimation('web')"
            >
              <span class="flex">
                <Icon
                  name="ph:globe"
                  class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                />
                <span class="grow ms-6">
                  <span
                    class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    >Web Application Development</span
                  >
                  <span
                    class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
                    >Crafting scalable and responsive web applications tailored
                    to your business requirements.</span
                  >
                </span>
              </span>
            </button>

            <button
              @click="setCurrentAnimation('mobile')"
              type="button"
              class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <span class="flex">
                <Icon
                  name="tdesign:mobile-shortcut"
                  class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                />
                <span class="grow ms-6">
                  <span
                    class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    >Mobile App Development</span
                  >
                  <span
                    class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
                    >Building native and cross-platform mobile applications that
                    deliver seamless user experiences.</span
                  >
                </span>
              </span>
            </button>

            <button
              @click="setCurrentAnimation('figma')"
              type="button"
              class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <span class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                  />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                <span class="grow ms-6">
                  <span
                    class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    >UI/UX</span
                  >
                  <span
                    class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
                    >Creating stunning and user-friendly interfaces through
                    collaborative design using Figma.</span
                  >
                </span>
              </span>
            </button>
          </nav>
          <!-- End Tab Navs -->
        </div>
        <!-- End Col -->

        <div class="lg:col-span-6">
          <div class="relative">
            <!-- Tab Content -->
            <div class="sm:ml-20 lg:w-[35rem]">
              <div
                id="tabs-with-card-1"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-1"
              >
                <client-only>
                  <Vue3Lottie :animationLink="currentAnimation" />
                </client-only>
              </div>
            </div>
            <!-- End Tab Content -->

            <!-- SVG Element -->
            <div
              class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20"
            >
              <svg
                class="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <!-- End SVG Element -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <!-- Background Color -->
      <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
        <div
          class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"
        ></div>
      </div>
      <!-- End Background Color -->
    </div>
  </div>
  <!-- End Features -->
</template>
