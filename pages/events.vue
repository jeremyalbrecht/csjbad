<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav/>

    <section class="bg-white border-b py-8 pt-28">
      <div class="container mx-auto m-8">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Vie du club
        </h2>
        <div data-aos="fade-up-right" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <template v-for="(event, index) in eventsData.events" :key="event">
            <div
              :class="((((index)) % 4) >= 2 || index == 0 ? 'md:col-span-2 ' : '') + 'flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row'">
              <img v-if="event.image.data"
                   :alt="event.image.data.attributes.alternativeText"
                   :src="config.public.BACKEND_URL + event.image.data.attributes.url" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg">
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ event.title }}</h5>
                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="$md(event.content)"></div>
              </div>
            </div>
            <a v-if="index % 8 == 0" href="https://www.facebook.com/augnybadminton/">
              <div
                class="flex flex-col items-center bg-white border gradient rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 ">
                <img alt=""
                     class="object-cover w-full hidden md:block h-96 md:h-auto md:w-64 rounded-full" src="../assets/imgs/fb-profile.jpeg">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Retrouvez nos événements sur
                    Facebook</h5>
                  <p class="mb-3 font-normal text-gray-400">Nous publions régulièrement sur Facebook, venez nous suivre
                    !</p>
                </div>
              </div>
            </a>
          </template>
        </div>
      </div>
    </section>
    <svg
      class="wave-top"
      viewBox="0 0 1439 147"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g
              transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <LayoutContact/>
    <LayoutFooter/>
  </div>
</template>


<script lang="ts" setup>
import {eventsQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: eventsQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const eventsData = data.value.data.vieDuClub.data.attributes
</script>