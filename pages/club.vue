<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav />

    <div class="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
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
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <section class="bg-white border-b  pt-28">
      <div class="container mx-auto m-8">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Le Club
        </h2>
        <div data-aos="fade-up" class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div v-for="(article, index) in clubData.articles"
             :key="article"
             :class="'flex mb-4 flex-wrap items-center justify-items-center ' + ((index % 2 == 1) ? 'flex-col-reverse sm:flex-row' : '')"
             :data-aos="'fade-up-' + ((index % 2 == 1) ? 'left' : 'right')">
          <div v-if="article.image.data.length > 0 && index % 2 == 1" class="w-full sm:w-1/3 p-1">
            <img :alt="article.image.data[0].attributes.alternativeText" :src="article.image.data[0].attributes.url"
                 :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + 'h-auto mx-auto rounded-lg'"/>
          </div>
          <div class="w-full lg:w-2/3 p-1 mb-5 sm:mb-0">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              {{ article.title }}
            </h3>
            <div class="text-gray-600 mb-8" v-html="$md(article.content)">
            </div>
            <a v-if="article.button_title" :href="article.button_url"
               :target="article.openInNewTab ? '_blank' : '_self'"
               class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              {{ article.button_title }}
            </a>
          </div>
          <div v-if="article.image.data.length > 0 && index % 2 == 0" class="w-full sm:w-1/3 p-1">
            <img :alt="article.image.data[0].attributes.alternativeText" :src="article.image.data[0].attributes.url"
                 :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + 'h-auto mx-auto rounded'"/>
          </div>
        </div>

        <div v-if="clubData.comiteeMembers.length > 0"
             class="flex mb-4 flex-wrap items-center justify-items-center" data-aos="fade-up-left">
          <div class="w-full p-1 mb-5 sm:mb-0">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              Comité
            </h3>
            <div class="text-gray-600 mb-8 mt-8">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center">
                <div v-for="member in clubData.comiteeMembers"
                     class="sm:basis-1/3 relative w-3/4 bg-white shadow-lg rounded-xl flex items-center gap-6 mt-7 sm:md-0">
                  <img v-if="member.image.data" :alt="member.image.data.attributes.alternativeText"
                       :src="member.image.data.attributes.url" class="absolute -left-6 w-24 h-24 rounded-full shadow-lg">
                  <img v-else :alt="member.name"
                       alt="Logo du club de Badminton d'Augny" class="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                       src="../assets/imgs/fb-profile.jpeg">
                  <div class="flex flex-col py-5 pl-24">
                    <p class="text-slate-900 font-medium"><strong class="gradient-text">{{ member.name }}</strong> <span
                      class="text-xs font-extrabold">{{
                        member.function
                      }}</span></p>
                    <p class="text-slate-700 text-sm">{{ member.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LayoutContact />
    <LayoutFooter />
  </div>
</template>

<script lang="ts" setup>
import {clubQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

useHead({
  title: 'Notre club | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Notre club de badminton a été fondé en 2003 à Augny, à côté de Metz. Découvrez l\'ambiance unique qui règne dans ce club à la fois compétiteurs et loisirs'
    },
  ],
});

const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: clubQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const clubData = data.value.data.club.data.attributes
</script>
