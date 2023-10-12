<template>
  <div class="leading-normal tracking-normal text-white gradient-hero w-full bg-top bg-contain">
    <LayoutNav />

    <section v-for="section in doubleJeuData.sections" class="bg-white border-b py-8 pt-24">
      <div class="container mx-auto m-8">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          {{ section.title }}
        </h2>
        <div class="w-full mb-10" data-aos="fade-up">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div v-for="(article, index) in section.articles"
             :key="article"
             :data-aos="'fade-up-' + ((index % 2 == 1) ? 'left' : 'right')"
             class="flex flex-wrap items-center justify-items-center p-5">
          <div v-if="article.image.data.length > 1 && index % 2 == 1"
               :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full sm:w-1/2 p-6 mt-6'">
            <div class="grid grid-cols-2 gap-2">
              <div v-for="image in article.image.data">
                <img :alt="image.attributes.alternativeText" :src="image.attributes.url"
                     class="h-auto max-w-full rounded-lg">
              </div>
            </div>
          </div>
          <div v-if="article.image.data.length == 1 && index % 2 == 1"
               :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full sm:w-1/3 p-1'">
            <img :alt="article.image.data[0].attributes.alternativeText" :src="article.image.data[0].attributes.url"
                 class="h-auto mx-auto max-w-full"/>
          </div>
          <div :class="{ [`sm:w-2/3`]: article.image.data.length  <= 1, [`sm:w-1/2`]: article.image.data.length  > 1 }"
               class="w-full p-1'">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 text-center lg:text-left">
              {{ article.title }}
            </h3>
            <div class="text-gray-600 mb-8" v-html="$md(article.content)">
            </div>
          </div>
          <div v-if="article.image.data.length == 1 && index % 2 == 0"
               :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full sm:w-1/3 p-1'">
            <img :alt="article.image.data[0].attributes.alternativeText" :src="article.image.data[0].attributes.url"
                 class="h-auto mx-auto max-w-full"/>
          </div>
          <div v-if="article.image.data.length > 1 && index % 2 == 0"
               :class="(article.showImageOnMobile ? '' : 'hidden sm:block') + ' w-full sm:w-1/2 p-6 mt-6'">
            <div class="grid grid-cols-2 gap-2">
              <div v-for="image in article.image.data">
                <img :alt="article.image.data[0].attributes.alternativeText" :src="image.attributes.url"
                     class="h-auto max-w-full rounded-lg">
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
import {doubleJeuQuery} from "~/graphql/query"
import {useRuntimeConfig} from "nuxt/app";

useHead({
  title: 'Nos tournois | CSJBAD Augny Badminton',
  meta: [
    {
      name: 'description',
      content: 'Chaque année à la rentrée et au début du printemps, le club de badminton d\'Augny (CSJBAD) organise un grand tournoi en double jeu. Revivez ces tournois à travers les photos'
    },
  ],
});
const config = useRuntimeConfig();
const {$md} = useNuxtApp()

const {data, error} = await useFetch(config.public.BACKEND_API_URL, {
  body: {
    query: doubleJeuQuery,
    variables: {}
  },
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
})

if (error.value) throw createError(error.value)

const doubleJeuData = data.value.data.doubleJeu.data.attributes
</script>

