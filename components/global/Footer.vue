<script setup>
const year = useState("currentYear", () => {
  const date = new Date();
  return date.getFullYear();
});
</script>

<template>
  <footer>
    <div class="">
      <div class="bg-indigo-800">
        <div class="relative z-10 overflow-hidden py-12 px-8 md:p-[70px]">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <span class="mb-2 text-base font-semibold text-white">
                Contact Us
              </span>
              <h2
                class="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0"
              >
                Have questions or need more information?
                <br class="xs:block hidden" />
                Get in touch with our team.
              </h2>
            </div>
            <div class="w-full px-4 lg:w-1/2">
              <div class="flex flex-wrap lg:justify-end">
                <a
                  class="flex items-center space-x-2 hover:text-primary my-1 mr-4 rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bg-indigo-900 hover:rounded-2xl md:px-9 lg:px-6 xl:px-9 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"
                    />
                  </svg>
                  <span class="block"> Email Us </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <span class="absolute top-0 left-0 z-[-1]">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div
          class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
        >
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            &copy; {{ year }} The R&C Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
