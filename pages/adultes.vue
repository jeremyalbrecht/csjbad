<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full">
    <LayoutNav/>

    <section class="bg-white border-b py-8 pt-24">
      <div class="container mx-auto m-8">
        <div data-aos="fade-up-right" class="flex flex-wrap">
          <div class="w-full p-1">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              Créneaux
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 flex items-start text-black">
              <template v-for="day in dayOfWeek">
                <div v-if="adultesData.creneaux.some(c => c.day == day)" class="mt-4 lg:mt-0">
                  <div>{{ day }}</div>
                  <div v-for="c in adultesData.creneaux.filter(c => c.day == day)"
                       :class="'rounded-lg mb-4 hover p-6 ' + ((c.color == 'Gris') ? 'gradient-grey' : 'gradient')">
                    <h5
                      :class="'mb-2 text-xl font-medium leading-tight ' + ((c.color == 'Gris') ? 'text-neutral-800' : 'text-neutral-50')">
                      {{ c.title }}
                    </h5>
                    <p :class="'mb-4 text-base ' + ((c.color == 'Gris') ? 'text-neutral-600' : 'text-neutral-200')">
                      {{ c.subtitle }}
                    </p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full mt-10">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
                Tarifs
              </h3>
              <div class="flex justify-center w-full">
                <table class="table text-left text-sm text-black">
                  <thead class="border gradient font-medium text-white">
                  <tr>
                    <th scope="col" class="px-6 py-4">Licence (du 1er septembre au 31 aout)</th>
                    <th scope="col" class="px-6 py-4">Prix</th>
                    <th scope="col" class="px-6 py-4"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="license in adultesData.license" class="border">
                    <td class="px-6 py-4 font-medium" v-html="license.name"></td>
                    <td class="px-6 py-4" v-html="license.price"></td>
                    <td class="px-6 py-4" v-html="license.description"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-gray-600 mb-5 mt-5" v-html="$md(adultesData.tarifs)"></div>
            </div>
          </div>
        </div>
        <div v-if="adultesData.files.data.length > 0" class="w-full p-1 mt-10">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
            Téléchargements
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 flex items-start text-black">
            <a v-for="file in adultesData.files.data" :href="file.attributes.url">
              <div class="rounded-lg mb-4 p-6 gradient-grey flex items-center">
                <div class="">
                  <img alt="" src="../assets/imgs/pdf.png">
                </div>
                <div class="justify-self-start ml-10">
                  <h5
                    :class="'mb-2 text-l font-medium leading-tight text-neutral-800'">
                    {{ file.attributes.name }} ({{ file.attributes.size }} Ko)
                  </h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section v-if="adultesData.button_title" id="adherer" class="gradient border-b py-8">
      <div class="container mx-auto m-8 flex justify-center">
        <div data-aos="fade-up-left" class="flex flex-wrap">
          <a
            id="navAction" :href="adultesData.button_action"
            class="mx-auto lg:mx-0 hover:underline gradient-grey text-neutral-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {{ adultesData.button_title }}
          </a>
        </div>
      </div>
    </section>

    <svg
      data-aos="zoom-in-up"
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
import {adultesQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const {$md} = useNuxtApp()
const dayOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: adultesQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const adultesData = data.value.data.adulte.data.attributes
</script>
