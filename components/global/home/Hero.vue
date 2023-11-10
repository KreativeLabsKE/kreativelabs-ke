<template>
  <section>
    <!-- Hero -->
    <div
      class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]"
    >
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <!-- Announcement Banner -->
        <div class="flex justify-center">
          <a
            class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Your Tech Solutions - Join Us
            <span
              class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        <!-- End Announcement Banner -->

        <!-- Title -->
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1
            class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200"
          >
            Let's Build
            <span
              class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
              >Together</span
            >
          </h1>
        </div>
        <!-- End Title -->

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Welcome to KreativeLabsKE, where creativity meets innovation. We are
            a Top-notch dedicated team of Software engineers committed to
            helping ambitious startups, companies, and agencies elevate their
            impressive ideas to reality.
          </p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 gap-3 flex justify-center text-indigo-700">
          <Icon name="line-md:twitter-x" class="w-8 h-auto" />
          <Icon name="bi:github" class="w-8 h-auto" />
        </div>
        <!-- End Buttons -->

        <div>
          <client-only>
            <Vue3Lottie
              animationLink="/lotties/welcome.json"
              :height="500"
              :width="500"
            />
          </client-only>
        </div>
      </div>
    </div>
    <!-- End Hero -->
  </section>
</template>
