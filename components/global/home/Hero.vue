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
            class="block font-extrabold [text-wrap:balance] text-gray-800 text-3xl md:text-5xl lg:text-5xl text-center"
          >
            Lets Build
            <span
              class="inline-flex flex-col items-center h-[calc(theme(fontSize.2xl)*theme(lineHeight.normal))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.loose))] overflow-hidden"
            >
              <ul
                class="block text-left leading-tight [&_li]:block animate-text-slide"
              >
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Together
                  </span>
                  🤝
                </li>
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Legacy
                  </span>
                  🏰
                </li>
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Tomorrow
                  </span>
                  🚀
                </li>
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Solutions
                  </span>
                  💡
                </li>
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Innovations
                  </span>
                  🤯
                </li>
                <li>
                  <span
                    class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
                  >
                    Creativity
                  </span>
                  🎨
                </li>
              </ul>
            </span>
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

        <div class="lg:w-[35rem]">
          <client-only>
            <Vue3Lottie animationLink="/lotties/welcome.json" />
          </client-only>
        </div>
      </div>
    </div>
    <!-- End Hero -->
  </section>
</template>

<style scope>
.animate-text-slide {
  animation: text-slide 13.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  16% {
    transform: translateY(0%);
  }

  20%,
  35% {
    transform: translateY(-16.66%);
  }

  40%,
  55% {
    transform: translateY(-33.33%);
  }

  60%,
  75% {
    transform: translateY(-50%);
  }

  80%,
  95% {
    transform: translateY(-66.66%);
  }

  100% {
    transform: translateY(-83.33%);
  }
}
</style>
